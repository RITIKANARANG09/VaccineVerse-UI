import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  router:Router=inject(Router)
  UserName:string
  phone:string
  age:number
  password:string
  authService : AuthService = inject(AuthService)
  SignUpClicked(form:NgForm)
  {
    const data={UserName:form.value.username, phone:form.value.phone, age:form.value.age, password:form.value.password
    }
    this.authService.register(data)
    console.log(data)
  }
  LoginNow()
  {
this.router.navigate(['auth/login'])
  }
}
