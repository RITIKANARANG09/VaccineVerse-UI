import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
const routes: Routes=[
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}  ]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
  // schemas:[NO_ERRORS_SCHEMA]
})
export class AuthModule { }
