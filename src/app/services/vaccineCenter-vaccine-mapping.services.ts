import { Injectable,inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginData } from "../Model/login.model";
import { RegisterData } from "../Model/register.model";
@Injectable({
    providedIn: 'root'
})
export class VaccineCenterVaccineMappoingService{
http:HttpClient=inject(HttpClient);
    viewVaccinesInVaccinationCenter()
    {

    }
    getVaccinationCentersForVaccine(id:number)
    {
        return this.http.get(null)
    }
}