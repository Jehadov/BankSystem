import { Component} from '@angular/core';
import { Shared0Module } from '../shared0/shared0.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewUsersService } from '../Server/new-users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [Shared0Module,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor( public userservice:NewUsersService ){  }
  
  formUser = new FormGroup({
    
    Fullname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    Age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(119)]),
    Gender: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Passwords: new FormControl('', [Validators.required, Validators.minLength(6)]),
    RoleName: new FormControl('', Validators.required),
    MyImage: new FormControl('')
    
  })
  data:any=this.formUser;
  
 
  
  RegisterNewUser(){
    debugger
    return this.userservice.postUser(this.formUser.value);

  }
  


}
