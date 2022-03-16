import React from "react";
import { CustomTable, ITableBodyElement } from "components";
import {
  CharacterTableHeader,
  ICharacter,
  CharacterResponse,
} from "./character.interfaces";
import { Info, Add, Delete } from "@mui/icons-material";
import { CharacterModal } from "./CharacterModal";

interface ICharacterList extends CharacterResponse {
  changePage: Function;
}

export const CharactersList: React.FC<ICharacterList> = ({
  results,
  info,
  changePage,
}) => {
  const [character, setCharacter] = React.useState<ICharacter>(Object);
  const [favorites, setFavorites] = React.useState<ICharacter[]>([]);
  
  React.useEffect(() => {
    let characters = [];
    try {
      characters = JSON.parse(localStorage.getItem("characters") || "");
    } catch {
    } finally {
      setFavorites(characters);
    }
  }, []);

  const actions = [
    {
      icon: (character: ICharacter) => <Info sx={{ color: "info.primary" }} />,
      action: (character: ICharacter) => setCharacter(character),
    },
    {
      icon: (character: ICharacter) =>
        !isFavorite(character) ? (
          <Add sx={{ color: "info.secondary" }} />
        ) : (
          <Delete sx={{ color: "info.secondary" }} />
        ),
      action: (character: ICharacter) => toggleFavorite(character),
    },
  ];

  const toggleFavorite = (character: ICharacter) => {
    let characters: ICharacter[] = [...favorites];
    try {
      const check = favorites.find((c: ICharacter) => c.id === character.id);
      if (!check) characters.push(character);
      else characters = favorites.filter((c) => c.id !== character.id);
    } catch (ex) {
      console.error("Error", ex);
      characters.push(character);
    } finally {
      localStorage.setItem("characters", JSON.stringify(characters));
      setFavorites(characters);
    }
  };

  const isFavorite = (character: ICharacter) => {
    try {
      return favorites.find((c: ICharacter) => c.id === character.id);
    } catch (ex) {
      return false;
    }
  };

  return (
    <>
      <CustomTable
        rows={
          (results as unknown as ITableBodyElement[]) ||
          ([] as ITableBodyElement[])
        }
        headers={CharacterTableHeader}
        actions={actions}
        paginationInfo={info}
        changePage={changePage}
      />
      <CharacterModal character={character} />
    </>
  );
};
