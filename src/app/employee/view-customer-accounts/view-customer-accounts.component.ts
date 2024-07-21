import { Component, OnInit } from '@angular/core';
import { SharedEModule } from '../../shared-e/shared-e.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../Server/login.service';
import { NewUsersService } from '../../Server/new-users.service';

@Component({
  selector: 'app-view-customer-accounts',
  standalone: true,
  imports: [SharedEModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-customer-accounts.component.html',
  styleUrl: './view-customer-accounts.component.css'
})
export class ViewCustomerAccountsComponent implements OnInit{
constructor (public ser:LoginService , public use:NewUsersService ) {
  
}
  ngOnInit(): void {
    this.ser.getuserdata(sessionStorage.getItem('Id'))
    this.ser.getaccountss()
    this.use.getusers()

  }
  Accept(id:number)
  {
    debugger
    console.log(id);
    this.ser.updateAccount(id);
  }
  Reject(id:number)
  {
    console.log(id);
    this.ser.rejectAccount(id);
  }
}
