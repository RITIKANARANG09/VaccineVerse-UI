import { Component,inject } from '@angular/core';
import { VaccinationCenterService } from '../../../services/vaccination-center.service';
import { VaccineService } from '../../../services/vaccine.service';
import { VaccineData } from '../../../Model/vaccine.model';
import { Router } from '@angular/router';
import { VaccinationCenterData } from '../../../Model/vaccinationCenter.model';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentData } from '../../../Model/appointment.model';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../../services/task.service';

@Component({
  selector: 'app-vaccination-center-details',
  templateUrl: './vaccination-center-details.component.html',
  styleUrl: './vaccination-center-details.component.css'
})
export class VaccinationCenterDetailsComponent {
  authService:AuthService=inject(AuthService);
  vaccinationCenters:any
  vaccinationCentersService:VaccinationCenterService=inject(VaccinationCenterService)
  vaccineService:VaccineService=inject(VaccineService)
  isPatientLoggedIn=false
  vaccine:VaccineData
  router:Router=inject(Router)
  showBookAppointmentDialog=false
  timing:string
  appointmentService:AppointmentService=inject(AppointmentService)
  vaccineCenter:any
  appointment:any
  datePipe=inject(DatePipe);
  currentUser:any
  showVaccineCenterDialog=false
  centerName:any
  centerAddress:any
  ngOnInit(){
    this.currentUser=this.authService.getUserRole()
    this.getAllVaccinationCenters()
    this.getUpdatedVaccine()
    this.getVaccinationCenters()
   this.getUpdatedVaccinationCenter()
   
}

AddVaccineCenter()
{
  this.showVaccineCenterDialog=true
}
getUpdatedVaccine()
{
  this.vaccine=this.vaccineService.getUpdatedVaccine()
  console.log(this.vaccineService.getUpdatedVaccine())
}

getUpdatedVaccinationCenter()
{
  this.vaccineCenter=this.vaccinationCentersService.getVaccinationCenter()
  console.log(this.vaccineService.getUpdatedVaccine())
}

getAllVaccinationCenters()
{
  this.vaccinationCentersService.viewVaccinationCenterDetails().subscribe(
    {
         
      next:(result)=>{
      console.log(result);
     this.vaccinationCenters=result
      //this.vaccines=result
      
      },
      error: (err) => 
      {
      console.log("Error aa gayi ");
      }
    }
  )
}

getVaccinationCenters()
{
  console.log(this.vaccine)
this.vaccinationCentersService.getFilteredVaccinationCenters(this.vaccine).subscribe
({
         
  next:(result)=>{
  console.log(result);
 this.vaccinationCenters=result
  //this.vaccines=result
  
  },
  error: (err) => 
  {
  console.log("Error aa gayi ");
  }
})






}

  


  AppointmentConfirmed(){
    this.timing=this.datePipe.transform(this.timing,'dd-MM-yyyyTHH:mm:ss');
    console.log(this.timing)
    console.log(this.vaccine.VaccineName)
    console.log(this.vaccineCenter)
    var appointment=new AppointmentData(
      this.vaccineCenter.Id,this.vaccine.Id,this.timing
    )
    console.log(appointment)
    this.showBookAppointmentDialog=false
    this.appointmentService.addAppointment(appointment).subscribe(() => {
      this.router.navigate(['dashboard/patient/view-appointments'], { queryParams: { refresh: new Date().getTime() } });
    });
    
    
  }
  BookAppointment(vaccinationCenter)
  {
    this.vaccinationCentersService.setVaccinationCenter(vaccinationCenter)
    this.vaccineCenter=vaccinationCenter
    this.showBookAppointmentDialog=true
   // this.router.navigate(['dashboard/patient/view-appointments'])
  }
}
