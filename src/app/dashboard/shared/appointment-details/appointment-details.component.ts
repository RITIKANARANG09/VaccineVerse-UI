import { Component,inject } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';
import { tap } from 'rxjs';
import { Routes,Router } from '@angular/router';
import { VaccinationCenterService } from '../../../services/vaccination-center.service';
import { AuthService } from '../../../services/task.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrl: './appointment-details.component.css'
})
export class AppointmentDetailsComponent {
appointments:any
appointmentsService:AppointmentService=inject(AppointmentService)
authService:AuthService=inject(AuthService)
routes:Router=inject(Router)
IsPatientLoggedIn=false
currentUserRole
constructor(private messageService: MessageService) { }
ngOnInit(){
  this.currentUserRole=this.authService.getUserRole()
  this.loadAppointments()
}

loadAppointments(){
  this.appointmentsService.viewAppointments().subscribe({
               
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
DeleteAppointment(id: number) {
  this.appointmentsService.deleteAppointment(id)
    .pipe(
      tap(() => {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
      })
    )
    .subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Appointment deleted successfully!!',
        });
        console.log('Appointment deleted successfully.');
        this.loadAppointments()
      },
      error: (error) => {
        console.error('Failed to delete appointment:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong!!',
        });
      }
    });
}
addAppointment(){
  this.routes.navigate(['dashboard/patient/add-appointment'])
}
}


 