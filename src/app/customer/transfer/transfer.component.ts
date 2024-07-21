import { Component, OnInit } from '@angular/core';
import { SharedCModule } from '../../shared-c/shared-c.module';
import { LoginService } from '../../Server/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [SharedCModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css'
})
export class TransferComponent implements OnInit{
  sessionStorage: any;

  constructor( public Loginuser:LoginService ){}
  userid=sessionStorage.getItem('Id');
  transactions:any=[];
  formTransfer  = new FormGroup({

    fromCustomerId:new FormControl(sessionStorage.getItem('Id')),
    toCustomerId:new FormControl(''),
    Amount:new FormControl(''),
    transferDate: new FormControl(''),
    Email: new FormControl(''),

  })
  
    
  ngOnInit(): void {
    debugger
      
    this.Loginuser.getTranfer(sessionStorage.getItem('Id'));
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
    
  }
  balance:number=this.Loginuser.OpenAccount.balance;
  transfer()
  {
    debugger
    this.Loginuser.postTranfer(this.formTransfer.value)
    this.Loginuser.getuserdata(sessionStorage.getItem('Id'))
  }
}
