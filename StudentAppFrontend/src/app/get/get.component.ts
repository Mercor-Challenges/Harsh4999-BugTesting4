import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})


export class GetComponent implements OnInit {
  public dataSource:Student[]=[];
  displayedColumns: string[] = ['id', 'name', 'std','action'];
  constructor(private service:MainServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
  }
 
  public deleteRowDataTable (recordId:string) {
   console.log(recordId);
   console.log(this.dataSource);
   this.service.deleteStudent(recordId).subscribe(
    (resp)=>{
      console.log(resp);
      this.getAll();
      this.router.navigate(['/get']);
    },
    err=>{
      console.log(err);
    }
  )
   
  }

  public updateRow (recordId:string) {
    console.log(recordId);
    console.log(this.dataSource);
    const ind =this.dataSource.findIndex(o=>o._id==recordId);
    this.service.setStudent(this.dataSource[ind]);
    this.router.navigate(['/update']);
   }

  getAll(){
    this.service.getStudents().subscribe(
      (data:Student[])=>{
        this.dataSource=data;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
