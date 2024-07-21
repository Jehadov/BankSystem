import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoanComponent } from './loan/loan.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { LoginService } from '../Server/login.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HomePageComponent,
    LoanComponent,
    TransactionComponent,
    TransferComponent
  ],
  exports:[
    HomePageComponent,
    LoanComponent,
    TransactionComponent,
    TransferComponent,
    NgxSpinnerModule,
    CommonModule
  ],
})
export class CustomerModule implements OnInit{

  constructor( public Loginuser:LoginService,private spinner: NgxSpinnerService ){}
  Userdata:any=this.Loginuser.OpenAccount


  ngOnInit(): void {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
      /** spinner ends after 5 seconds */
    }, 1500);
  }
 }
