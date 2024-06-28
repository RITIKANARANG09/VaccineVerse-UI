import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { VaccineDetailsComponent } from './shared/vaccine-details/vaccine-details.component';
import { AppointmentDetailsComponent } from './shared/appointment-details/appointment-details.component';
import { SharedComponent } from './shared/shared.component';
import { GlobalVaccineDetailsComponent } from './shared/global-vaccine-details/global-vaccine-details.component';
import { AddAppointmentComponent } from './patient/add-appointment/add-appointment.component';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { VaccinationCenterDetailsComponent } from './shared/vaccination-center-details/vaccination-center-details.component';
import {DialogModule} from "primeng/dialog"
import {CalendarModule} from 'primeng/calendar';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { GlobalAdminComponent } from './global-admin/global-admin.component';
import { AppointmentHistoryComponent } from './shared/appointment-history/appointment-history.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';


@NgModule({
 declarations:[
  VaccineDetailsComponent,
  AppointmentDetailsComponent,
  SharedComponent,
  GlobalVaccineDetailsComponent,
  AddAppointmentComponent,
  VaccinationCenterDetailsComponent,
  AdminComponent,
  PatientComponent,
  GlobalAdminComponent,
  AppointmentHistoryComponent
 ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataViewModule,
    DropdownModule,
    CardModule,
    FormsModule,
    DialogModule,
    CalendarModule,
    TableModule,
    ToastModule
  ],
  providers:[
    DatePipe
  ]
})
export class DashboardModule { }
