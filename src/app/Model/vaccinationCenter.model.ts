export class VaccinationCenterData{
    Id:number
    VaccineCenterName:string
    VaccineCenterAddress:string
    LocalAdminId:string
    constructor(Id,VaccineName,Va,l){
        this.Id=Id
        this.VaccineCenterName=VaccineName
        this.VaccineCenterAddress=Va
        this.LocalAdminId=l
    }
}