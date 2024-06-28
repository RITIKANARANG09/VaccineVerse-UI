import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailsComponent } from './shared/vaccine-details/vaccine-details.component';
import { AppointmentDetailsComponent } from './shared/appointment-details/appointment-details.component';
import { GlobalVaccineDetailsComponent } from './shared/global-vaccine-details/global-vaccine-details.component';
import { VaccinationCenterDetailsComponent } from './shared/vaccination-center-details/vaccination-center-details.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { GlobalAdminComponent } from './global-admin/global-admin.component';
import { AppointmentHistoryComponent } from './shared/appointment-history/appointment-history.component';


const routes: Routes = [
    {path:'view-vaccines', component:GlobalVaccineDetailsComponent},
    {path:'admin',children:[
       
        {path:'',component:AdminComponent},
        {path:'appointments',component:AppointmentDetailsComponent},
        {path: 'view-vaccines', component:VaccineDetailsComponent},
        {path: 'view-history', component: AppointmentHistoryComponent},
        {path:'add-vaccine', component:GlobalVaccineDetailsComponent},
    ]},
    {path:'global-admin',children:[
        {path:'',component:GlobalAdminComponent},
        {path:'view-vaccines', component:GlobalVaccineDetailsComponent},
        {path:'view-vaccine-centers', component:VaccinationCenterDetailsComponent}
    ]},
    {path:'patient',children:[
        {path:'',component:PatientComponent},
        {path:'view-vaccines', component:VaccineDetailsComponent},
        {path:'view-appointments',component:AppointmentDetailsComponent},
        {path: 'view-history', component: AppointmentHistoryComponent},
        {path:'vaccination-centers-details',component:VaccinationCenterDetailsComponent}
    ]}
  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DashboardRoutingModule{

}