import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Shared0Module } from '../shared0/shared0.module';
import { CommonModule } from '@angular/common';
import { LoginService } from '../Server/login.service';

@Component({
  selector: 'app-login-users',
  standalone: true,
  imports: [FormsModule,Shared0Module, ReactiveFormsModule, CommonModule],
  templateUrl: './login-users.component.html',
  styleUrl: './login-users.component.css'
})
export class LoginUsersComponen {
  constructor( public Loginservice:LoginService ){}
  
  formUser:  FormGroup = new FormGroup({ 
    Email: new FormControl(''),
    Password: new FormControl(''),
  })   
  
  LoginData()
  {
    this.Loginservice.LoginAccoutnt(this.formUser.value);
  }
}
