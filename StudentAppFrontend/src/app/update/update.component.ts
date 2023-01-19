import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public stud!:Student;
  constructor(private mainService:MainServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getStudent();
  }

  public getStudent(){
    this.stud=new Student();
    this.stud=this.mainService.getStudent();
  }

  public updateStud(formData:NgForm){
    this.stud = new Student();
    console.log(formData.value)
    this.stud._id=this.mainService.getStudent()._id;
    this.stud.name=formData.value.name || this.stud.name;
    this.stud.std=formData.value.std || this.stud.std;
    console.log(this.stud);
    this.mainService.updateStudent(this.stud).subscribe(
      (resp:Student)=>{
        console.log(resp);
        this.router.navigate(['/get']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
