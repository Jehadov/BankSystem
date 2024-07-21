import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedERoutingModule } from './shared-e-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
   
  ],
  exports:[HeaderComponent,FooterComponent],
})
export class SharedEModule { }
