import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { access } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class NewUsersService {

  constructor(private http:HttpClient,private router:Router) { }
  users:any=[];
  postUser(body:any){
    debugger
    body.access= 'false';
    this.http.post('https://localhost:7138/api/Users',body).subscribe((res:any)=>{
      debugger
      console.log(res);
      alert("your registration is successful!");
      this.router.navigate(['./LoginUser']);
    })    
  }
  getusers(){
    debugger
    this.http.get('https://localhost:7138/api/Users').subscribe((res:any)=>{
      this.users =res;
      console.log(this.users)

    })
  }

  

 
}
