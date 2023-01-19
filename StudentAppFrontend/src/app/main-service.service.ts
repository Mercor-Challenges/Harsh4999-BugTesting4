import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './model/student';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private student!: Student;
  constructor(private http:HttpClient) { }

  public getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(environment.baseUrl+'/getAll');
  }

  public getOneStudent(id:string): Observable<Student|Object>{
    return this.http.get<Student|Object>(`${environment.baseUrl}/${id}`);
  }

  public addStudent(stud:Student):Observable<Student>{
    return this.http.post<Student>(environment.baseUrl+"/add",stud);
  }

  public updateStudent(stud:Student):Observable<Student>{
    console.log(environment.baseUrl+"/update/"+stud._id);
    return this.http.put<Student>(environment.baseUrl+`/update/${stud._id}`,stud);
  }

  public deleteStudent(id:string){
   return this.http.delete(environment.baseUrl+'/delete/'+id);
  }

  public setStudent(stud:Student){
    this.student=stud;
  }
  public getStudent():Student{
    return this.student;
  }
}
