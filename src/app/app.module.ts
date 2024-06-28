import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from './header/header.component';
import { TabPanel } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { AddVaccineComponent } from './dashboard/shared/add-vaccine/add-vaccine.component';
import { AddAppointmentComponent } from './dashboard/patient/add-appointment/add-appointment.component';
import { DropdownModule } from 'primeng/dropdown';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddVaccineComponent,
    HomeComponent
  
  ],
    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    StyleClassModule,
    CheckboxModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule,
    RadioButtonModule,
    TabViewModule,
    CalendarModule,
    CardModule,
    DataViewModule,
    DropdownModule,
    ToastModule,
    TableModule,
    DashboardModule
    
  ],
  exports:[],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
