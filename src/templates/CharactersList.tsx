import React from "react";
import { CustomTable, ITableBodyElement } from "components";
import { CharacterTableHeader, ICharacter } from "./character.interfaces";
import { Info, Add } from "@mui/icons-material";

interface ICharactersListProps {
  rows: ICharacter[];
}

const openDetail = (id: number) => {
  console.log(id);
};

const addToFavorite = (id: number) => {
  console.log(id);
};

const actions = [
  {
    icon: <Info />,
    action: (id: number) => openDetail(id),
  },
  {
    icon: <Add />,
    action: (id: number) => addToFavorite(id),
  },
];
export const CharactersList: React.FC<ICharactersListProps> = ({ rows }) => {
  return (
    <CustomTable
      rows={rows as unknown as ITableBodyElement[]}
      headers={CharacterTableHeader}
      actions={actions}
    />
  );
};
