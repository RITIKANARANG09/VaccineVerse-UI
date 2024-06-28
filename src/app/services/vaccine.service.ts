import { Injectable,inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginData } from "../Model/login.model";
import { RegisterData } from "../Model/register.model";
import { VaccineData } from "../Model/vaccine.model";
import { MessageService } from "primeng/api";
import { Update } from "../Model/update.model";
@Injectable({
    providedIn: 'root'
})
export class VaccineService{
    
http:HttpClient=inject(HttpClient);
updatedVaccine:VaccineData

    viewVaccines()
    {
       return this.http.get('https://localhost:5001/api/Vaccine')
    }

    addVaccineGlobally(vaccine)
    {
        return this.http.post('https://localhost:5001/api/Vaccine',vaccine,{responseType:"text",withCredentials:true})
    }


    addVaccineInVaccinationCenter(vaccine)
    {
        return this.http.post('https://localhost:5001/api/Vaccine/AddVaccine',vaccine,{responseType:"text",withCredentials:true})
    }

    viewVaccinesInAVaccinationCenter()
    {
        return this.http.get('https://localhost:5001/api/Vaccine/getAvailableVaccines',{responseType:"text",withCredentials:true})    
    }

    setUpdatedVaccine(vaccine)
    {
        this.updatedVaccine=vaccine
        console.log(this.updatedVaccine)
    }

    getUpdatedVaccine()
    {
        return this.updatedVaccine;
    }

    UpdateVaccineCount(vaccine,isIncreased)
    {var data=new Update(vaccine.VaccineName,vaccine.VaccineCount)
        if (isIncreased==true)
        {
            console.log("in vaccine servcsd")
            this.updatedVaccine=vaccine;
            console.log(data);
            return this.http.patch('https://localhost:5001/api/Vaccine/Increase',data).subscribe({
         
            next:(result)=>{
            console.log(result);
           
            //this.vaccines=result
            
            },
            error: (err) => 
            {
            console.log("Error aa gayi ");
            }
          })
        }
        else
        {
            this.updatedVaccine=vaccine;
            return this.http.patch('https://localhost:5001/api/Vaccine/Decrease',vaccine).subscribe({
         
            next:(result)=>{
            console.log(result);
           
            //this.vaccines=result
            
            },
            error: (err) => 
            {
            console.log("Error aa gayi ");
            }
          })
        }
    }

    viewVaccinesInAllVaccinationCenters()
    {
        return this.http.get('https://localhost:5001/api/Vaccine/getVaccines',{responseType:"text",withCredentials:true})    
    }
}
