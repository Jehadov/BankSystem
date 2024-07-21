import { Component, OnInit } from '@angular/core';
import { SharedEModule } from '../../shared-e/shared-e.module';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../Server/login.service';

@Component({
  selector: 'app-view-transactions',
  standalone: true,
  imports: [SharedEModule,CommonModule],
  templateUrl: './view-transactions.component.html',
  styleUrl: './view-transactions.component.css'
})
export class ViewTransactionsComponent implements OnInit{
  constructor( public Loginuser:LoginService ){}


  ngOnInit(): void {
    debugger
    this.Loginuser.getTranfer(sessionStorage.getItem('Id'));

    this.Loginuser.getTransaction(sessionStorage.getItem('Id'));
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
  }
  
  balance:number=this.Loginuser.OpenAccount.balance;


}
