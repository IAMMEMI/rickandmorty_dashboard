import React from "react";
import { Layout, CustomTable, ITableBodyElement } from "components";
import {
  CharacterTableHeader,
  ICharacter,
} from "templates/character.interfaces";

const rowsPerPage: number = 20;

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = React.useState<ICharacter[]>([]);
  const [paginatedFavorites, setPaginatedFavorites] = React.useState<
    ICharacter[]
  >([]);

  React.useEffect(() => {
    let characters = [];
    try {
      characters = JSON.parse(localStorage.getItem("characters") || "");
    } catch {
    } finally {
      setFavorites(characters);
      setPaginatedFavorites(characters.slice(0, rowsPerPage));
    }
  }, []);

  const changePage = (newPage: number) => {
    const departure = rowsPerPage * (newPage - 1);
    const newList = favorites.slice(departure, departure + rowsPerPage);
    setPaginatedFavorites(newList);
  };

  return (
    <Layout>
      <CustomTable
        rows={
          (paginatedFavorites as unknown as ITableBodyElement[]) ||
          ([] as ITableBodyElement[])
        }
        headers={CharacterTableHeader}
        actions={[]}
        paginationInfo={{
          pages: Math.round(favorites.length / rowsPerPage) + 1,
        }}
        changePage={(page: number) => changePage(page)}
      />
    </Layout>
  );
};
