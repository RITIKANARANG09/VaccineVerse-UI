export class VaccineData{
    Id:number
    VaccineName:string
    MinAge:number
    MaxAge:number
    constructor(VaccineName,MinAge,MaxAge){
        this.VaccineName=VaccineName
        this.MinAge=MinAge
        this.MaxAge=MaxAge
    }
}