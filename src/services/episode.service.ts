import { IEpisode } from "templates/episode.interfaces";
import { http } from "./http-common";
export class EpisodeService {
  get(episode?: string) {
    let url = "/episode";
    if (episode) url = `${url}/${episode}`;
    return http.get<Array<IEpisode>>(url);
  }
}
