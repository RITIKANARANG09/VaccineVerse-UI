import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/task.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  router:Router=inject(Router)
  currentUserRole:string
  authService:AuthService=inject(AuthService)
  ngOnInit()
  {
    this.currentUserRole=this.authService.getUserRole();
  }
  options = [
    {
      id: 1,
      header: 'View Vaccines',
      subheader: 'View vaccines available in the vaccination centers !',
      image: '../../assets/820c99bc-9ba6-47d5-9dd5-28f80fc2237f-XXX_Vaccine_121720_AN_008.webp',
      // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
      labelButton: 'View'
    },

    {
      id: 2,
      header: 'View Appointments',
      subheader: 'View your Appointments !',
      image: '../../assets/appointments.png',
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View'
    },

    {
      id: 3,
      header: 'View History',
      subheader: 'View your vaccines history!',
      image: '../../assets/image2.png',
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View'
    }
  ]

  navigation(id: number){
    console.log(id);
    switch (id) {
      case 1:
        this.router.navigate(['dashboard/patient/view-vaccines']);
        break;
      case 2: 
        this.router.navigate(['dashboard/patient/view-appointments']);
        break;
      case 3:
        this.router.navigate(['dashboard/patient/view-history']);
        break;
      default:
        break;
    }
  }
}

