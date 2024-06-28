import { Injectable,inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { VaccineService } from "./vaccine.service";
import { VaccinationCenterData } from "../Model/vaccinationCenter.model";
@Injectable({
    providedIn: 'root'
})
export class VaccinationCenterService{
http:HttpClient=inject(HttpClient);
updatedVaccinationCenter:any
vaccineService:VaccineService=inject(VaccineService)
localAdminId:any
vaccinationCenters:any


    getVaccinationCenterFromLocalAdminId()
    {
        return this.http.get('https://localhost:5001/api/VaccinationCenter/getVCDetails')
    }
    viewVaccinationCenterDetails()
    {
       return this.http.get('https://localhost:5001/api/VaccinationCenter')
    }
    getFilteredVaccinationCenters(vaccine)
    {
       return this.http.get('https://localhost:5001/api/VaccinationCenter?id='+vaccine.Id)
    }

    vaccinationCenterFromID()
    {
        return this.http.get('https://localhost:5001/api/VaccinationCenter/getVCDetails').subscribe
        ({
                 
          next:(result)=>{
          console.log(result);
         this.updatedVaccinationCenter=result
          //this.vaccines=result
          
          },
          error: (err) => 
          {
          console.log("Error aa gayi ");
          }
        })
    }

    setVaccinationCenter(vaccinationCenter)
    {
        this.updatedVaccinationCenter=vaccinationCenter
    }
    getVaccinationCenter()
    {
return this.updatedVaccinationCenter
    }
    }
 
