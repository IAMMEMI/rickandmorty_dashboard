import React from "react";
import { CustomTable, ITableBodyElement } from "components";
import {
  CharacterTableHeader,
  ICharacter,
  CharacterResponse,
} from "./character.interfaces";
import { Info, Add } from "@mui/icons-material";
import { CharacterModal } from "./CharacterModal";

const addToFavorite = (id: number) => {
  console.log(id);
};

interface ICharacterList extends CharacterResponse {
  changePage: Function;
}

export const CharactersList: React.FC<ICharacterList> = ({
  results,
  info,
  changePage,
}) => {
  const [character, setCharacter] = React.useState({} as ICharacter);
  const actions = [
    {
      icon: <Info sx={{ color: "info.primary" }} />,
      action: (character: ICharacter) => setCharacter(character),
    },
    {
      icon: <Add sx={{ color: "info.secondary" }} />,
      action: (id: number) => addToFavorite(id),
    },
  ];

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
