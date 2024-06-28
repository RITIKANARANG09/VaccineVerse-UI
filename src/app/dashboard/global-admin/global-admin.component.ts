import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/task.service';

@Component({
  selector: 'app-global-admin',
  templateUrl: './global-admin.component.html',
  styleUrl: './global-admin.component.css'
})
export class GlobalAdminComponent {
  router:Router=inject(Router);
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
      subheader: 'View vaccines available globally !',
      image: '../../assets/shutterstock_616263095.webp',
      // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
      labelButton: 'View'
    },

    {
      id: 2,
      header: 'View Vaccination Centers',
      subheader: 'View vaccination centers !',
      image: '../../assets/appointments.png',
      // description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis ",
      labelButton: 'View'
    }
  ]

  navigation(id: number){
    console.log(id);
    switch (id) {
      case 1:
        this.router.navigate(['dashboard/global-admin/view-vaccines']);
        break;
      case 2: 
        this.router.navigate(['dashboard/global-admin/view-vaccine-centers']);
        break;
      // case 3:
      //   this.router.navigate(['dashboard/customer/rentals']);
      //   break;
      default:
        break;
    }
  }
}
