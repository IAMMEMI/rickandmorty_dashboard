import { CharacterResponse, ICharacter } from "templates/character.interfaces";
import { http } from "./http-common";
export class CharacterService {
  getAll(page?: string) {
    let url = "/character";
    if (page) url = `${url}?page=${page}`;
    return http.get<CharacterResponse>(url);
  }
  get(id: string) {
    return http.get<ICharacter>(`/character/${id}`);
  }
  findByName(name: string) {
    return http.get<CharacterResponse>(`/character?name=${name}`);
  }
}
