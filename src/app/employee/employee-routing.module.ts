import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EHomePageComponent } from './ehome-page/ehome-page.component';
import { ViewCustomerAccountsComponent } from './view-customer-accounts/view-customer-accounts.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { ManageLoansComponent } from './manage-loans/manage-loans.component';

const routes: Routes = [
  {
    path:'EMployee_Home',
    component:EHomePageComponent
  },
  {
    path:'ViewCustomerAccounts',
    component:ViewCustomerAccountsComponent
  },
  {
    path:'ViewTransactions',
    component:ViewTransactionsComponent
  },
  {
    path:'ManageLoans',
    component:ManageLoansComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
