import { Component,inject } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { VaccineData } from '../../../Model/vaccine.model';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Subject, catchError, throwError } from "rxjs";
import { filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { VaccinationCenterService } from '../../../services/vaccination-center.service';
import { MappingData } from '../../../Model/mapping.model';
import { AuthService } from '../../../services/task.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-vaccine-details',
  templateUrl: './vaccine-details.component.html',
  styleUrl: './vaccine-details.component.css'
})
export class VaccineDetailsComponent {
  vaccines : any = []
  vaccineService:VaccineService=inject(VaccineService)
  loggedIn:any=null
  router:Router=inject(Router)
  route:ActivatedRoute=inject(ActivatedRoute)
  vaccinationCenterService:VaccinationCenterService=inject(VaccinationCenterService)
 url
 showAddAppointmentPage=false
 vname:any
 vcount:number
 vcenter:any
 showUpdatePage=false
 isIncreased=false
 selectedVaccine:any
authService:AuthService=inject(AuthService);
currentUserRole:any
initialCount:any
constructor(private messageService: MessageService) { }
  ngOnInit(){
    this.currentUserRole=this.authService.getUserRole();
    console.log("current user role is : "+this.currentUserRole)
   
   
    this.vcenter=this.vaccinationCenterService.getVaccinationCenter()
    this.viewVaccineDetails()
    this.getUpdatedVaccine()
}

  getUpdatedVaccine(){
    this.selectedVaccine=this.vaccineService.getUpdatedVaccine()
    console.log("sv:"+this.selectedVaccine)
    }

 
  viewVaccineDetails(){
  //console.log(this.loggedIn)
   if(this.currentUserRole==='GlobalAdmin'){
      this.vaccineService.viewVaccines().subscribe
      ({
               
        next:(result:any)=>{
        console.log(result);
        
        this.vaccines=result
        
        },
        error: (err) => 
        {
        console.log("Error in GA");
        }
      })
   }
    if(this.currentUserRole==='LocalAdmin')
    {
      console.log("LA")
    this.vaccineService.viewVaccinesInAVaccinationCenter().subscribe
    ({
             
      next:(result)=>{
      console.log(result);
     this.vaccines=JSON.parse(result)
      //this.vaccines=result
    
      },
      error: (err) => 
      {
      console.log("Error IN LA");
      }
    })
   
  }


  if(this.currentUserRole=='Patient')
  {
  this.vaccineService.viewVaccinesInAllVaccinationCenters().subscribe
  ({
           
    next:(result)=>{
    console.log(result);
   this.vaccines=JSON.parse(result)
    //this.vaccines=result
    
    },
    error: (err) => 
    {
    console.log("Error IN PT ");
    }
  })
 
}
}

AddVaccine()
{
//  this.showAddAppointmentPage=true
//  var vaccine=new MappingData(this.vname,this.vcount)
//  this.vaccineService.addVaccineInVaccinationCenter(vaccine);
this.router.navigate(['dashboard/admin/add-vaccine'])
}

VaccineConfirmed()
{
  if(this.selectedVaccine.VaccineCount>=this.vcount)
    {this.isIncreased=false;
  this.selectedVaccine.VaccineCount=this.vcount
    }else{
  this.isIncreased=true;
  this.selectedVaccine.VaccineCount=this.vcount
    }
  this.showUpdatePage=false
 
  console.log(this.selectedVaccine.VaccineCount)
  this.vaccineService.UpdateVaccineCount(this.selectedVaccine,this.isIncreased);
  this.messageService.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Vaccine updated successfully!!',
  });
  this.viewVaccineDetails();
  this.router.navigate(['/dashboard/admin/view-vaccines'])
  // this.vaccineService.addVaccineInVaccinationCenter(vaccine)
}

UpdateVaccineCount(vaccine)
{
  console.log(vaccine);
   this.showUpdatePage=true;
   this.vcount=vaccine.VaccineCount
   console.log(this.vcount)
  this.selectedVaccine=vaccine;
  console.log("selected vaccine :"+this.selectedVaccine);
  console.log(vaccine);
  
  // this.router.navigate(['/dashboard/admin/update-vaccine'])
}

UpdateCount(vaccine)
{
  var vaccineDetail=new MappingData(vaccine.Id,this.vcenter.Id,vaccine.VaccineName,vaccine.VaccineCount)
  console.log(this.vcount);
 
}
ViewVaccinationCenters(vaccine)
{
  this.vaccineService.setUpdatedVaccine(vaccine)
  this.router.navigate(['dashboard/patient/vaccination-centers-details'])
}

OnIncreased()
{
  
  this.vcount+=1
  
  this.isIncreased=true;
  console.log(this.selectedVaccine)
}
OnDecreased()
{
  this.vcount-=1
 
  this.isIncreased=false;
  console.log(this.selectedVaccine)

}
AddVaccineLocally(){
  this.router.navigate(['dashboard/admin/add-vaccine'])
}
}
