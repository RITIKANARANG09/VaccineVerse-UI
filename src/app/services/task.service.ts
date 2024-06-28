import { Injectable,inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginData } from "../Model/login.model";
import { RegisterData } from "../Model/register.model";
import { Router } from "@angular/router";
import { VaccinationCenterService } from "./vaccination-center.service";
import { CookieService } from "ngx-cookie-service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
http:HttpClient=inject(HttpClient);
router: Router = inject(Router);
    userId:string="";
    role:string;
    userSubject = new BehaviorSubject(null);
    vaccinationCenterService:VaccinationCenterService=inject(VaccinationCenterService)
    cookieService:CookieService = inject(CookieService)
    currentUser: string = '';
    userIdSubject= new BehaviorSubject(null);
    isLoggedIn=false;

    login(loginData:loginData){
        this.http.post('https://localhost:5001/api/Auth/Login', loginData,{responseType:"text",withCredentials:true}).subscribe({
               
        next:(result)=>{
            this.isLoggedIn=true;
            console.log(this.isLoggedIn)
        console.log(result);
        var data =  JSON.parse(result)
        this.userIdSubject.next(data.Id);
        this.userId = data.Id;
        this.role=data.Role;
        this.userSubject.next(data);
        this.setCookies();
        console.log("user role "+this.getUserRole());
        console.log("user id "+this.getUserId());
        if( data.Role === "LocalAdmin"){
    
           this.vaccinationCenterService.localAdminId=data.Id
           console.log(this.vaccinationCenterService.localAdminId)
           this.isLoggedIn=true;
           this.currentUser=data;
           console.log("admin"+this.isLoggedIn);
            this.router.navigate(['dashboard/admin'])
        }
        
        if( data.Role === "Patient"){
            this.isLoggedIn=true;
            this.userId=data.Id
            this.currentUser=data
            console.log(this.currentUser)
             this.router.navigate(['dashboard/patient'])
         }
         if (data.Role === "GlobalAdmin")
            {
                this.isLoggedIn=true;
            this.userId=data.Id
            this.currentUser=data
            console.log(this.currentUser)
             this.router.navigate(['dashboard/global-admin']) 
            }
        },
        error: (err) => 
        {
        console.log("Error aa gayi ");
       }
}
        )
    }


    setCookies(){

        this.cookieService.set("userId",this.userId);
        this.cookieService.set("role",this.role);
      }
    
      getUserId(){
        this.isLoggedIn=true;
        return this.cookieService.get("userId");
      }

      getUserRole(){
        this.isLoggedIn=true;
        return this.cookieService.get("role");
      }
      logout(){
        this.userSubject.next(null);
        this.cookieService.delete('userId');
        
        this.isLoggedIn=false
        this.router.navigate(['/auth/login'])
      }

    register(signUpData:RegisterData)
    {
        this.http.post('https://localhost:5001/api/Auth/Register', signUpData).subscribe({
            next: (res) =>{
                // console.log(res)
            },
            error: (errMsg) => {
                console.log(errMsg.Message)
            }
        }
        );
    }
 
}