import { Component, OnInit } from '@angular/core';
import { SharedEModule } from '../../shared-e/shared-e.module';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Server/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-loans',
  standalone: true,
  imports: [SharedEModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './manage-loans.component.html',
  styleUrl: './manage-loans.component.css'
})
export class ManageLoansComponent implements OnInit {
  constructor( public serv:LoginService ){  }



  ngOnInit(): void {
    this.serv.getLoan(sessionStorage.getItem('Id'));
    this.serv.getuserdata(sessionStorage.getItem('Id'))
  }
  Accept(loanid:number,Amount:number)
  {
    debugger
    console.log(loanid);
    this.serv.updateLoan(loanid,Amount,sessionStorage.getItem('Id'));
  }
  Reject(loanid:number)
  {
    console.log(loanid);
    this.serv.rejectLoan(loanid);
  }

}
