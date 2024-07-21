import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCRoutingModule } from './shared-c-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerModule } from '../customer/customer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCRoutingModule,
    HeaderComponent,
    FooterComponent,
    CustomerModule
  ],
  exports:[HeaderComponent,
    FooterComponent],
})
export class SharedCModule { }
