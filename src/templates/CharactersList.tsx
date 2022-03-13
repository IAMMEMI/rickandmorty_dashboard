import React from "react";
import { CustomTable, ITableBodyElement } from "components";
import { CharacterTableHeader, ICharacter } from "./character.interfaces";
import { Info, Add } from "@mui/icons-material";
import { CharacterModal } from "./CharacterModal";

interface ICharactersListProps {
  rows: ICharacter[];
}

const addToFavorite = (id: number) => {
  console.log(id);
};

export const CharactersList: React.FC<ICharactersListProps> = ({ rows }) => {
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
        rows={rows as unknown as ITableBodyElement[]}
        headers={CharacterTableHeader}
        actions={actions}
      />
      <CharacterModal character={character} />
    </>
  );
};
