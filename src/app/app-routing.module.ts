import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
    {
      path:'auth',loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {path:'dashboard',loadChildren:() =>import('./dashboard/dashboard.module').then(m=>m. DashboardModule)
  }
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingModule{

}