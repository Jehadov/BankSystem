import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Server/login.service';
import { CustomerModule } from '../customer.module';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  
  constructor( public Loginuser:LoginService, public Userdata:CustomerModule ){}
  editing:boolean=false;

  
  ngOnInit(): void {
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
    
  }
  formUser = new FormGroup({    
    passwords: new FormControl(''),
    fullname: new FormControl(''),
  })
  
  Edit(){
    this.editing=true;
  }
  savedata(data1:any,data2:any,data3:any,data4:any,data5:any){
    debugger
    const res:any=
    {
      accountId:sessionStorage.getItem('Id'),
      fullname:data1,
      email:data2,
      balance:data3,
      passwords:data4,
      roleName:data5,
      token: null
    }
    
    this.Loginuser.EditAcc(res,this.formUser.value);
    this.editing=false;
  }

}
