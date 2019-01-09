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
    static groupid : string = "45f95249-7ae8-4335-899b-d66de3334065";
    static reportid : string = "e00e412c-d883-4fdb-a6eb-9bb3f699c1e2";
}