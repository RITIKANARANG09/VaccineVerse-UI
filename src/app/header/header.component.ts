import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  authService: AuthService = inject(AuthService);
  cookieService: CookieService = inject(CookieService);
  router: Router = inject(Router);
  isLoggedIn: boolean = false;
  private _userSubject: Subscription
  currentUserRole: string = '';
  userId: string='null';

  ngOnInit() {
    this.currentUserRole=this.authService.getUserRole();
    this.userId=this.authService.getUserId();
    console.log("userid"+this.userId)

  }

  ngOnDestroy() {
    this._userSubject.unsubscribe();
  }

  logout(){
    this.isLoggedIn = false;
    this.cookieService.delete('userId');
    this.authService.logout();
    this.userId="null"
    console.log("after logout user id is "+ this.userId);
  }
login()
{
  this.router.navigate(["auth/login"])
}
  navigateDashboard(){
    console.log(this.currentUserRole)
    console.log("in nav func");
    if(this.currentUserRole==='LocalAdmin')
    {console.log('la')
      this.router.navigate(['/dashboard','admin'])}
    else if(this.currentUserRole==='Patient')
      {console.log('pa')
    this.router.navigate(['dashboard','patient'])}
    else if(this.currentUserRole==='GlobalAdmin')
      {console.log('ga')
    this.router.navigate(['dashboard','global-admin'])}
  
}
}