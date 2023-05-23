export interface Nba {
    id : string;
    first_name : string;
    height_feet : number;
    height_inches : number;
    last_name: string;
    position: string;
    team: Team | number;
    weight_pounds: number;
}

export interface Team {
    id: string;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}
