import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { subscribe } from 'node:diagnostics_channel';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) {}
  OpenAccount:any=[];
  allAccount:any=[];
  access:boolean=false;
  OpenTransaction:any=[]
  OpenLoan:any=[]
  OpenTransfer:any=[]
  tranferTo:any=[]


  LoginAccoutnt(body:any){
    let access:number = 1;
    debugger
    body.Email;body.Password
    var j=this.http.post('https://localhost:7138/api/BankAccounts/login?Email='+body.Email+'&Password='+body.Password,1).subscribe((res:any)=>
    {
    this.access=true;
    debugger
    this.OpenAccount=res;
    sessionStorage.setItem('Id', this.OpenAccount.accountId);

    if(res.roleName=="Employee"){  
      this.router.navigate(['./Employee/EMployee_Home']);
    }
    else if(res.roleName=="Customer"){
      this.router.navigate(['./Customer/HomePage']);
    }
    })
    if(j == null)
    alert("your Password Or Email Is Wrong");
  }




  getaccountss(){
    debugger
    this.http.get('https://localhost:7138/api/BankAccounts').subscribe((res:any)=>{
      this.allAccount =res;
      console.log(this.allAccount)

    })
  }
  getuserdata(cid:any){
    debugger
    this.http.get('https://localhost:7138/api/BankAccounts/'+cid).subscribe((res:any)=>{
      this.OpenAccount =res;
      console.log(this.OpenAccount)

    })
  }
  
  
  updatedata(cid:any,body:any, balance:number){
    debugger
    if(balance >= body.Amount)
    {  
      debugger
      this.OpenAccount.balance=balance-body.Amount;
      this.http.put('https://localhost:7138/api/BankAccounts/'+cid,this.OpenAccount).subscribe((res:any)=>
      {
        debugger
        this.OpenAccount=res;
        alert("Paid Successfully");
        
      })
    }
    else alert("your Amount is lar Wrong");
  }
        
        
        
  // Transactions
  getTransaction(cid:any){
    debugger
    this.http.get('https://localhost:7138/api/Transactions/').subscribe((res:any)=>{
      this.OpenTransaction =res;
      console.log(this.OpenTransaction)

    })
  }
  postTransaction(body:any){
    debugger
    if(body.Amount <= this.OpenAccount.balance){
      this.http.post('https://localhost:7138/api/Transactions',body).subscribe((res:any)=>{
        
        console.log(res)
        setTimeout(()=>{
          window.location.reload();
        },1000 )
      },err=>{
        console.log(err)
        
      })
    }
  }

  getLoan(cid:any){
    debugger
    this.http.get('https://localhost:7138/api/Loans').subscribe((res:any)=>{
      this.OpenLoan =res;
      console.log(this.OpenLoan)

    })
  }
  updateLoan(cid:any,Amount:number,id:any){

    console.log(cid);
    console.log(Amount);
    this.http.get('https://localhost:7138/api/Loans/'+cid).subscribe((res:any)=>{
      debugger
    res.activeState='1';
    this.http.put('https://localhost:7138/api/Loans/'+cid,res).subscribe((res:any)=>{
      debugger
      this.OpenLoan =res;
      console.log(this.OpenLoan)
       setTimeout(()=>{
        window.location.reload();
      },1000 )
    },err=>{
      console.log(err)

    })
    this.http.get('https://localhost:7138/api/BankAccounts/'+res.accountId).subscribe((res:any)=>{
      debugger
      res.balance = res.balance + Amount ;
      
      this.http.put('https://localhost:7138/api/BankAccounts/'+res.accountId,res).subscribe((res:any)=>{
        debugger
        this.OpenLoan =res;
        console.log(this.OpenLoan)
        
      },err=>{
        console.log(err)
      })
      
    })
    
  })
  }
  postLoan(body:any){
    debugger

    this.http.post('https://localhost:7138/api/Loans',body).subscribe((res:any)=>{
      alert("Wait until the Employee Accept the Loan");
      debugger
      console.log(res)
      setTimeout(()=>{
        window.location.reload();
      },1000 )
    },err=>{
      console.log(err)
      
    })
  }
  
  
  getTranfer(cid:any){
    debugger
    this.http.get('https://localhost:7138/api/Transfers').subscribe((res:any)=>{
      this.OpenTransfer =res;
  
    })
  }


  postTranfer(body:any){
    this.http.post('https://localhost:7138/api/BankAccounts/transfering?Email='+body.Email,1).subscribe((res:any)=>
    {
      debugger
      body.toCustomerId = res.accountId;

      res.balance = res.balance + body.Amount ;
      this.http.put('https://localhost:7138/api/BankAccounts/'+body.toCustomerId,res).subscribe((res:any)=>
      {
        debugger
        this.OpenAccount=res;
        alert("Paid Successfully");
        
      })

      this.http.get('https://localhost:7138/api/BankAccounts/'+body.fromCustomerId).subscribe((res:any)=>{
        this.allAccount =res;
        console.log(this.allAccount)
        res.balance = res.balance - body.Amount ;
        this.http.put('https://localhost:7138/api/BankAccounts/'+body.fromCustomerId,res).subscribe((res:any)=>
          {
            debugger
            this.OpenAccount=res;
            alert("Paid Successfully");
            
          })
      })
          
      this.http.post('https://localhost:7138/api/Transfers',body).subscribe((res:any)=>{
        debugger
        alert("Transfare the data To "+body.Email);
        console.log(res)
        setTimeout(()=>{
          window.location.reload();
        },1000 )
      },err=>{
        console.log(err)

      })
    })
  }

  updateAccount(cid:any){

    this.http.get('https://localhost:7138/api/Users/'+cid).subscribe((res:any)=>{

      debugger
      res.access='true'
      this.http.put('https://localhost:7138/api/Users/'+cid,res).subscribe((res:any)=>{
        debugger
        this.OpenLoan =res;
        console.log(this.OpenLoan)
      })
      const usertoaccount=
      {
        userId:res.id,
        balance:0,
        passwords:res.passwords,
        email:res.email,
        roleName:res.roleName,
        myImage:res.myImage,
        fullname:res.fullname,
        token: null
      }
       
      this.http.post('https://localhost:7138/api/BankAccounts',usertoaccount).subscribe((res:any)=>{
        debugger
        this.OpenAccount =res;
        console.log(this.OpenAccount)
        setTimeout(()=>{
          window.location.reload();
        },1000 )
       },err=>{
        console.log(err)  
      })
    })

  }


 


  rejectAccount(id:number){

    this.http.delete('https://localhost:7138/api/Users/'+id).subscribe((res:any)=>{
      
      setTimeout(()=>{
        window.location.reload();
      },1000 )

    })
  }
  rejectLoan(id:number){
    this.http.delete('https://localhost:7138/api/Loans/'+id).subscribe((res:any)=>{
      
      setTimeout(()=>{
        window.location.reload();
      },1000 )
      
    })
    
  }

  EditAcc(res:any,foemm:any)
  {
    debugger
    res.fullname=foemm.fullname;
    res.passwords=foemm.passwords
    console.log(res)
    this.http.put('https://localhost:7138/api/BankAccounts/'+res.accountId,res).subscribe((res:any)=>{
      debugger
      this.OpenAccount =res;
      console.log(this.OpenAccount)
      this.router.navigate(['./Customer/HomePage']);
    },err=>{
      console.log(err)
    })
    
  }



}