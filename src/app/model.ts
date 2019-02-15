export class ElectionModel {
    id: string;
    idArea: string;
    nameArea: string;
    idParty: string;
    nameParty: string;
    noRegister: string;
    nameRegister: string;
    status: boolean;
    nameInitial: number;
    tag: string[];
    score: number;
    source: string;
    statusEdit: boolean;
    statusAreaEdit: boolean;

}

export class otherScore {
    name: string;
    score: number;
}


export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/Election/";
    static hostGetToken: string = "http://pbiebeded.azurewebsites.net/api/values/gettoken/";
    static groupid: string = "50ffda63-4985-4fdf-b052-c78cee9263ff";
    static reportid: string = "f8e570be-3b86-4ba0-8000-280dd77e6bea";
}