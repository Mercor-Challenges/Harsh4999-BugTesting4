import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { observeNotification } from 'rxjs/internal/Notification';
import { MainServiceService } from '../main-service.service';
import { Student } from '../model/student';
import { MatLabel } from '@angular/material/form-field';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private student!:Student;
  public test!:NgForm;
  constructor(private mainService:MainServiceService,private router:Router) { }

  ngOnInit(): void {
    
   // this.addStud();
  }

  public addStud(formData:NgForm){
    this.student=new Student();
    this.student.name=formData.value.name;
    this.student.std=formData.value.std;
    // this.student.name="harsh";
    // this.student.std=1;
    console.log(this.student)
    this.mainService.addStudent(this.student).subscribe(
      (resp)=>{
        console.log(resp);
        this.router.navigate(['/get']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
