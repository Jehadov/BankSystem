import { Component, OnInit } from '@angular/core';
import { SharedCModule } from '../../shared-c/shared-c.module';
import { NgModel } from '@angular/forms';
import { LoginService } from '../../Server/login.service';
import { CustomerModule } from '../customer.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedCModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor( public Loginuser:LoginService, public Userdata:CustomerModule ){}
  

 
  ngOnInit(): void {
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))

  }


}
