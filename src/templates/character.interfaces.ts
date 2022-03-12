import { Info } from "./info.interfaces";

export interface CharacterResponse {
  info: Info;
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export const CharacterTableHeader = [
  {
    key: "id",
    value: "ID",
  },
  {
    key: "name",
    value: "Name",
  },
  {
    key: "status",
    value: "Status",
  },
  {
    key: "species",
    value: "Species",
  },
  {
    key: "type",
    value: "Type",
  },
  {
    key: "gender",
    value: "Gender",
  },
];
