import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { Layout, Searchbar } from "components";

import { CharacterResponse } from "templates/character.interfaces";
import { CharactersList } from "templates/CharactersList";
import { CharacterService } from "services/character.service";
const characterService = new CharacterService();

const Loading = styled("div")`
  height: 150px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Home: React.FC = () => {
  const [response, setResponse] = React.useState<CharacterResponse>(Object);
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
      {!response.results ? (
        <Loading>
          <CircularProgress />
        </Loading>
      ) : (
        <>
          <Searchbar onChange={search} />
          <CharactersList
            results={response.results}
            info={response.info}
            changePage={changePage}
          />
        </>
      )}
    </Layout>
  );
};
