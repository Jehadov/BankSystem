import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedEModule } from '../shared-e/shared-e.module';
import { EHomePageComponent } from './ehome-page/ehome-page.component';
import { ViewCustomerAccountsComponent } from './view-customer-accounts/view-customer-accounts.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { ManageLoansComponent } from './manage-loans/manage-loans.component';


@NgModule({
  declarations: [],
  imports: [CommonModule,
    EmployeeRoutingModule,
    SharedEModule,
    EHomePageComponent,
    ViewCustomerAccountsComponent,
    ViewTransactionsComponent,
    ManageLoansComponent
  ],
  exports:[],
})
export class EmployeeModule { }
