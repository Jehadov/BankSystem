import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginUsersComponen } from './login-users/login-users.component';

export const routes: Routes = [
    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'ContactUS',
        component:ContactUsComponent
    },
    {
        path:'AboutUS',
        component:AboutUsComponent
    },
    {
        path: 'LoginUser',
        component:LoginUsersComponen
    },
    {
        path:'Customer',
        loadChildren : ()=>import('./customer/customer.module').then(x=> x.CustomerModule)
    },
    {
        path:'Employee',
        loadChildren : ()=>import('./employee/employee.module').then(x=> x.EmployeeModule)
    },
    {
        path:'Register',
        component:RegisterComponent
    },
    {
        path:'Forget_Password',
        component:ForgetPasswordComponent
    },
   
    

 
    
];
