import { Component,inject } from '@angular/core';
import { VaccineService } from '../../../services/vaccine.service';
import { Router } from '@angular/router';
import { VaccineData } from '../../../Model/vaccine.model';

@Component({
  selector: 'app-add-vaccine',
  templateUrl: './add-vaccine.component.html',
  styleUrl: './add-vaccine.component.css'
})
export class AddVaccineComponent {
  vaccines:any
  isAdminLoggedIn=false
  vaccineService:VaccineService=inject(VaccineService)
  router:Router=inject(Router)
  selectedVaccine:VaccineData
  loggedIn:any


  ngOnInit(){
    this.getUserRole()
    if(this.loggedIn==='admin')
    this.isAdminLoggedIn=true
      console.log(this.vaccines)
    this.viewVaccines()
  }
  getUserRole(){
    var segments = this.router.url;
    console.log(this.router.url)
    // console.log(this.route.url.forEach)
    // Define the segments to search for
     var list=segments.split('/')
    const targetSegments = ['admin', 'global-admin', 'patient'];
console.log(list)
    
    
      if (targetSegments.find(s => list.includes(s))) {
        this.loggedIn = targetSegments.find(s => list.includes(s)).toString();
        console.log(this.loggedIn);
    }

  }

  viewVaccines(){
    this.vaccineService.viewVaccinesInAVaccinationCenter().subscribe({
               
      next:(result)=>{
      console.log(result);
      var obj=JSON.parse(result)
      this.vaccines=obj.map(vaccine => vaccine.name);
      //this.router.navigate(['/dashboard/admin/view-vaccines'])
      // if( result['role'] === "Admin"){
         
      //     this.router.navigate(['admin-dashboard'])
      // }
      console.log(result)
      
      },
      error: (err) => 
      {
      console.log("Error aa gayi ");
     }

  })
  this.vaccines=this.vaccines.map(vaccine => vaccine.name);
  }

  getVaccinesName()
  {
    return this.vaccines.map(vaccine => vaccine.name);
  }

  onAddVaccine(vaccine)
  {
    if(this.loggedIn==='global-admin'){
    this.vaccineService.addVaccineGlobally(vaccine).subscribe({
               
      next:(result)=>{
      console.log(result);
      this.router.navigate(['/dashboard/global-admin/vaccines'])
      // if( result['role'] === "Admin"){
         
      //     this.router.navigate(['admin-dashboard'])
      // }
      
      console.log(result)
      
      },
      error: (err) => 
      {
      console.log("Error aa gayi ");
     }

  })
    }
    else{
      this.vaccineService.addVaccineInVaccinationCenter(vaccine).subscribe({
               
        next:(result)=>{
        console.log(result);
        this.router.navigate(['/dashboard/admin/view-vaccines'])
        // if( result['role'] === "Admin"){
           
        //     this.router.navigate(['admin-dashboard'])
        // }
        console.log(result)
        
        },
        error: (err) => 
        {
        console.log("Error aa gayi ");
       }
  
    })
    }
  }
}
