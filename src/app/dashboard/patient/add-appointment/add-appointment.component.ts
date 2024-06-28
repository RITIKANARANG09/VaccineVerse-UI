import { Component,inject } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { VaccineCenterVaccineMappoingService } from '../../../services/vaccineCenter-vaccine-mapping.services';
import { NgForm } from '@angular/forms';
import { AppointmentData } from '../../../Model/appointment.model';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css'
})
export class AddAppointmentComponent {
  vaccines:any
  selectedVaccine:any
  vaccinationCenters:any
  selectedVaccinationCenter:any
  vaccineService:VaccineService=inject(VaccineService)
  vaccineMappingService:VaccineCenterVaccineMappoingService=inject(VaccineCenterVaccineMappoingService)

  ngOnInit(){
    this.loadAvailableVaccines()
    console.log(this.vaccines)
  }

  loadAvailableVaccines() {
    this.vaccineService.viewVaccines().subscribe({
               
      next:(result:any)=>{
      console.log(result);
      
      this.vaccines=result
      
      },
      error: (err) => 
      {
      console.log("Error aa gayi ");
      }
    });
  }


  onVaccineSelect() {
    if (this.selectedVaccine) {
      this.vaccineMappingService.getVaccinationCentersForVaccine(this.selectedVaccine.id).subscribe((centers: any[]) => {
        this.vaccinationCenters = centers;
      });
    }
  }
    onAddAppointment(appointment:AppointmentData)
  {

  }

}
