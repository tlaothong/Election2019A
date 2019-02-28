export class ScoreParty {
    id: string;
    idParty: string;
    partyName: string;
    nameInitial: string;
    totalScore: number;
    haveScore: number;
    haveScoreDigit: number;
    areaScore: number;
    nameListScore: number;
    percentScore: number;
    urlImg: string;
}

export class ScoreArea {
    id: string;
    idArea: string;
    idParty: string;
    nameArea: string;
    nameInitial: string;
    nameParty: string;
    nameRegister: string;
    noRegister: string;
    score: number;
    source: number;
    status: boolean;
    tags: string[];
    statusEdit: boolean;
    statusAreaEdit: boolean;
    region: string;
    idRegion: string;
}

export class otherScore {
    name: string;
    score: number;
}

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/ElectionV3/";
    //static host: string = "http://localhost:5000/api/ElectionV3/";
}