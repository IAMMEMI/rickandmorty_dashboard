import { CharacterResponse, ICharacter } from "templates/character.interfaces";
import { http } from "./http-common";
export class CharacterService {
  getAll() {
    return http.get<CharacterResponse>("/character");
  }
  get(id: string) {
    return http.get<ICharacter>(`/character/${id}`);
  }
  findByName(name: string) {
    return http.get<CharacterResponse>(`/character?name=${name}`);
  }
}
