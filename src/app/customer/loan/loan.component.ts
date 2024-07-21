import { Component, OnInit } from '@angular/core';
import { SharedCModule } from '../../shared-c/shared-c.module';
import { LoginService } from '../../Server/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [SharedCModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent implements OnInit{
  sessionStorage: any;
  
    constructor( public Loginuser:LoginService ){}
    userid=sessionStorage.getItem('Id');
    transactions:any=[];
    formloan  = new FormGroup({

      loanType:new FormControl(''),
      loanAmount:new FormControl(''),
      loanStartDate:new FormControl(''),
      loanEndDate:new FormControl(''),
      activeState: new FormControl('0'),
      accountId:new FormControl(sessionStorage.getItem('Id'))
  
    })
    
    
    ngOnInit(): void {
      debugger
      
      this.Loginuser.getLoan(sessionStorage.getItem('Id'));
      this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
    }
    
    LoanAction()
    {
      debugger
      this.Loginuser.postLoan(this.formloan.value)
      // this.Loginuser.updatedata(sessionStorage.getItem('Id'),this.formloan.value,this.Loginuser.OpenAccount.balance)
    }

}
