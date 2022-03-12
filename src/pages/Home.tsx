import React from "react";
import { Layout, Searchbar } from "components";

import { ICharacter } from "templates/character.interfaces";
import { CharactersList } from "templates/CharactersList";

import { rows } from "./rows";
const remappedRows = rows as ICharacter[];

export const Home: React.FC = () => {
  React.useState(remappedRows);
  const search = (value: string) => {
    //chiamare le API
    console.log(value);
  };
  return (
    <Layout>
      <Searchbar onChange={search} />
      <CharactersList rows={remappedRows} />
    </Layout>
  );
};
