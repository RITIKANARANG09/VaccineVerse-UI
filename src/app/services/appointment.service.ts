import { Injectable,inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginData } from "../Model/login.model";
import { RegisterData } from "../Model/register.model";
import { VaccinationCenterService } from "./vaccination-center.service";
@Injectable({
    providedIn: 'root'
})
export class AppointmentService{

vaccinationCenterService:VaccinationCenterService=inject(VaccinationCenterService)    
http:HttpClient=inject(HttpClient);

viewAppointments()
    {
        
        return this.http.get('https://localhost:5001/api/Appointment',{responseType:"text",withCredentials:true})
    }

    viewAppointmentsHistory()
    {
        return this.http.get('https://localhost:5001/api/Appointment/History',{responseType:"text",withCredentials:true})
    }
    deleteAppointment(appointmentId){
        return this.http.delete('https://localhost:5001/api/Appointment/'+appointmentId,{responseType:"text",withCredentials:true})
        // if( result['role'] === "Admin"){
           
        //     this.router.navigate(['admin-dashboard'])
        // }
        
    }

    addAppointment(appointment)
    {
        return this.http.post('https://localhost:5001/api/Appointment',appointment,{responseType:"text",withCredentials:true})
    }
}
 
