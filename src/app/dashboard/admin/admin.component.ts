import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/task.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  router:Router=inject(Router)
  currentUserRole:string=''
  authService:AuthService=inject(AuthService)
  ngOnInit()
  {
    this.currentUserRole=this.authService.getUserRole();
  }
 
  options = [
    {
      id: 1,
      header: 'View Vaccines',
      subheader: 'View vaccines available in your vaccination center !',
      image: '../../assets/shutterstock_616263095.webp',
      // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
      labelButton: 'View'
    },

    {
      id: 2,
      header: 'View Appointments',
      subheader: 'View Appointments in your vaccine center !',
      image: '../../assets/appointments.png',
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View'
    },
    {
      id: 3,
      header: 'View History',
      subheader: 'View History of Patient in your vaccine center !',
      image: '../../assets/image2.png',
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View'
    }
  ]

  ViewDetails(id:number)
  {
    if(id==1)
    {
      this.router.navigate(['dashboard/admin/view-vaccines'])
    }
    else if(id==2)
    {
      this.router.navigate(['dashboard/admin/appointments'])
    }
    else if(id == 3)
      {
        this.router.navigate(['dashboard/admin/view-history'])
      }
  }
}
