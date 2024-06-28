export class AppointmentData{
    AppointmentId:number
    VaccinationCenterId:number
    VaccineId:number
    DateTime:string
    constructor(VaccinationCenterId,VaccineId,DateTime){
        this.VaccinationCenterId=VaccinationCenterId
        this.VaccineId=VaccineId
        this.DateTime=DateTime
    }
}