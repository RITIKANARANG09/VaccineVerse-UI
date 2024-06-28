import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router:Router=inject(Router)
 Register()
 {
  this.router.navigate(["auth/login"])
 }
 
 ViewVaccines()
 {
  this.router.navigate(["dashboard/view-vaccines"])
 }

 descriptions = [
  {
    id: 1,
    header: 'View Vaccines',
    subheader: 'View available vaccines of your age',
    image: '../../assets/immunization-clipart-7.jpg',
    // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
   
  },
  {
    id: 2,
    header: 'View Vaccine Center',
    subheader: 'Choose your nearest vaccination center',
    image: '../../assets/immunization-clipart-7.jpg',
    // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
   
  },
  {
    id: 3,
    header: 'Book Appointment',
    subheader: 'Book your appointment ',
    image:'../../assets/immunization-clipart-7.jpg',
    // description: "loLorem ipsum, dolor sit amet consectetur adipisicing elit. A sapiente pariatur impedit qui, totam magni quia eius ipsam maxime deserunt dolor laboriosam quo hic reprehenderit suscipit commodi debitis",
   
  }
]

options=[
  {
    id: 1,
    header: 'Login Now',
    subheader: "Have an account, login now!",
    image: '../../assets/image2.png',
    description: "Login",
   
  },
  {
    id: 2,
    header: 'View Vaccines',
    subheader: 'View vaccines available world wide!',
    image: "../../assets/bella-step-2.jpg",
    description: "View",
   
  }
]

ViewVaccinesClicked()
{
  this.router.navigate(['dashboard/view-vaccines'])
}

viewDetails(id:number)
  {
    if(id==1)
    {
      this.Register();
    }
    else{
      this.ViewVaccines();
    }
  }
}
