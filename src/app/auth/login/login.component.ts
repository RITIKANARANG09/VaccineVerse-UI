import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { AuthService } from '../../services/task.service';
import { inject } from '@angular/core';
import { loginData } from '../../Model/login.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  data: {Phone:'', Password:'', role:''}
  Phone:string
  Password:string
  role:string='Patient'
  isLoggedIn=false;
  router:Router=inject(Router);

  authService:AuthService=inject(AuthService)

  LoggedInClicked(form: NgForm){
   const data={Phone:form.value.phone, Password:form.value.password, role:'Patient'}
    this.isLoggedIn=true;
  this.authService.login(data);
  
  }
  RegisterClicked()
  {
    this.router.navigate(['dashboard','register']);
  }
}
