import { Component, inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { AuthService } from '../../../services/task.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrl: './appointment-history.component.css'
})
export class AppointmentHistoryComponent {


appointments:any
appointmentsService:AppointmentService=inject(AppointmentService)
authService:AuthService=inject(AuthService)
routes:Router=inject(Router)
IsPatientLoggedIn=false
currentUserRole
constructor(private messageService:MessageService) {}
ngOnInit(){
  this.currentUserRole=this.authService.getUserRole()
  this.loadAppointments()
}

loadAppointments(){
  this.appointmentsService.viewAppointmentsHistory().subscribe({
               
    next:(result)=>{
    const obj = JSON.parse(result);
    console.log(obj);
    this.appointments=obj
    
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
    
   }
}
    )
}

}


 