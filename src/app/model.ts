export class ScoreParty {
    id: string;
    idParty: string;
    partyName: string;
    totalScore: number;
    areaScore: number;
    nameListScore: number;
    percentScore: number;
    urlImg: string;
}

export class otherScore {
    name: string;
    score: number;
}

export class GlobalVaraible {
    static host: string = "http://electionvars.azurewebsites.net/api/ElectionV3/";
}