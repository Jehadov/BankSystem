import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginService } from '../Server/login.service';
import { LoanComponent } from './loan/loan.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path : 'HomePage',
    component:HomePageComponent  
  },
  {
    path : 'Loan',
    component:LoanComponent
  },
  {
    path : 'Transfer',
    component:TransferComponent
  },
  {
    path : 'Transaction',
    component:TransactionComponent
  },
  {
    path : 'Details',
    component:DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
  constructor( public Loginuser:LoginService ){}
  Userdata:any=this.Loginuser.OpenAccount
 }
