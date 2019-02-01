export class ElectionModel {
    id: string;
    nameArea: string;
    numberArea: number;
    province: string;
    district: string;
    party: string;
    nameRegister: string;
    score: number;
    targetScore: number
    tag: string
}

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/Election/";
    static hostGetToken : string = "http://pbiebeded.azurewebsites.net/api/values/gettoken/";
    static groupid : string = "50ffda63-4985-4fdf-b052-c78cee9263ff";
    static reportid : string = "f8e570be-3b86-4ba0-8000-280dd77e6bea";
}