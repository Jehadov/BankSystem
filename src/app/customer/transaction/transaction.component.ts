import { Component, OnInit } from '@angular/core';
import { SharedCModule } from '../../shared-c/shared-c.module';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Server/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [SharedCModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent implements OnInit{
sessionStorage: any;

  constructor( public Loginuser:LoginService ){}
  
  userid=sessionStorage.getItem('Id');
  transactions:any=[];
  
  formTransaction  = new FormGroup({
    currancy:new FormControl(''),
    Amount:new FormControl(''),
    transactionType:new FormControl(''),
    accountId:new FormControl(sessionStorage.getItem('Id'))
  })
  
  
  ngOnInit(): void {
    debugger
    
    this.Loginuser.getTransaction(sessionStorage.getItem('Id'));
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
  }
  
  balance:number=this.Loginuser.OpenAccount.balance;
  transaction()
  {
    debugger
    this.Loginuser.postTransaction(this.formTransaction.value)
    this.Loginuser.updatedata(sessionStorage.getItem('Id'),this.formTransaction.value,this.Loginuser.OpenAccount.balance)
  }
}
