import React from "react";
import { Layout, Searchbar } from "components";

import { CharacterResponse } from "templates/character.interfaces";
import { CharactersList } from "templates/CharactersList";
import { CharacterService } from "services/character.service";
const characterService = new CharacterService();

export const Home: React.FC = () => {
  const [response, setResponse] = React.useState({} as CharacterResponse);
  React.useEffect(() => {
    const getData = async () => {
      const { data } = await characterService.getAll();
      setResponse(data);
    };
    getData();
  }, []);

  const search = async (value: string) => {
    const { data } = await characterService.findByName(value);
    setResponse(data);
  };

  const changePage = async (value: string) => {
    const { data } = await characterService.getAll(value);
    setResponse(data);
  };

  return (
    <Layout>
      <Searchbar onChange={search} />
      <CharactersList
        results={response.results}
        info={response.info}
        changePage={changePage}
      />
    </Layout>
  );
};
