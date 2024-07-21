import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shared0RoutingModule } from './shared0-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Shared0RoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
})
export class Shared0Module {
 
 }
