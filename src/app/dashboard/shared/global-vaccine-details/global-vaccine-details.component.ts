import { Component,inject } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { map } from 'rxjs/operators';
import { VaccinationCenterService } from '../../../services/vaccination-center.service';
import { VaccineData } from '../../../Model/vaccine.model';
import { MappingData } from '../../../Model/mapping.model';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/task.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-global-vaccine-details',
  templateUrl: './global-vaccine-details.component.html',
  styleUrl: './global-vaccine-details.component.css'
})
export class GlobalVaccineDetailsComponent {
  vaccines:any
  vaccineService:VaccineService=inject(VaccineService)
  isAdminLoggedIn=true
  vaccinationCenterService:VaccinationCenterService=inject(VaccinationCenterService)
  vcCenter:any
  showForm=false
  vaccineCount=0
  isIncreased=false
  router:Router=inject(Router)
  authService:AuthService=inject(AuthService);
  isUserLoggedIn=false;
  showVaccineDialog=false;
  currentUserRole:any
  vname:any
  minAge:number
maxAge:number
  v:any
vc:any
constructor(private messageService: MessageService) { }
  ngOnInit(){
    this.isUserLoggedIn=this.authService.isLoggedIn
    console.log("aaaa"+this.isUserLoggedIn)
    this.currentUserRole=this.authService.getUserRole();
    console.log("role"+this.currentUserRole)
   this.loadVaccines()
   this.loadVaccinationCenter()
   console.log(this.vc)
   console.log("v = "+this.vaccines)
   
}

loadVaccines()
{
  console.log("vaccines are loaded")
  this.vaccineService.viewVaccines().subscribe({
               
    next:(result)=>{
    console.log(result);
    this.vaccines=result
    
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
}
})
}

loadVaccinationCenter()
{
  this.vaccinationCenterService.getVaccinationCenterFromLocalAdminId().subscribe({
           
    next:(result)=>{
    console.log(result);
    this.vc=result
    
    //this.vaccines=result
    
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
    }
  })
}
AddVaccineGlobally(vaccine)
{
  console.log(this.vc)
  console.log(this.isUserLoggedIn)
  this.vaccineService.setUpdatedVaccine(vaccine);
  this.v=vaccine
  this.showForm=true

}
AddVaccineClicked()
{
  this.showVaccineDialog=true
}
AddVaccineLocally(vaccine)
{
  this.vaccineService.setUpdatedVaccine(vaccine);
  this.vaccineService.addVaccineInVaccinationCenter(vaccine).subscribe ({
           
    next:(result)=>{
    // console.log(result);
   this.vaccines=result
    //this.vaccines=result
    
    this.router.navigate(['dashboard/admin/view-vaccines'])
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Vaccine added successfully!!',
    });
    this.loadVaccines();
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: "Vaccine exists already"
    });
    }
  })
 

}

VaccineConfirmed(){

console.log(this.v.Id)
console.log(this.vc.Id)
console.log(this.vaccineCount)
  var vaccineData=new MappingData(this.v.Id,this.vc.Id,this.v.VaccineName,this.vaccineCount)
  this.vaccineService.addVaccineInVaccinationCenter(vaccineData).subscribe ({
           
    next:(result)=>{
    // console.log(result);
   this.vaccines=result
    //this.vaccines=result
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Vaccine added successfully!!',
    });
    },
    error: (err) => 
    {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Vaccine exists already!!',
      });
    console.log("Error aa gayi ");
    }
  })
  this.showForm=false
  this.router.navigate(['dashboard/admin/view-vaccines'])
}


VaccineConfirmedGlobally()
{
  this.showVaccineDialog=false;
  var vaccine = new VaccineData(this.vname,this.minAge,this.maxAge);
  console.log(vaccine);
  this.vaccineService.addVaccineGlobally(vaccine).subscribe({
         
    next:(result)=>{
    console.log("result :"+result);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Vaccine added successfully!!',
    });
    //this.vaccines=result
    this.router.navigate(['dashboard/global-admin/view-vaccines'])
    },
    error: (err) => 
    {
    console.log("Error aa gayi ");
    }
  });
  
}
}
