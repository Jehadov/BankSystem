import { Component } from '@angular/core';
import { Shared0Module } from '../shared0/shared0.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Shared0Module],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})
export class HomeComponent {
  constructor(){}

  title ='OYIL Training';


}
