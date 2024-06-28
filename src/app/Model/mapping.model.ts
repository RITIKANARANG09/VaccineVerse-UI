export class MappingData{
    Id:number
    VaccineId:number
    VaccinationCenterId:number
    VaccineName:string
    VaccineCount:number
    
    constructor(VaccineId,VaccinationCenterId,VaccineName,VaccineCount){
        this.VaccineId=VaccineId,
        this.VaccinationCenterId=VaccinationCenterId
        this.VaccineName=VaccineName
        this.VaccineCount=VaccineCount
    }
}