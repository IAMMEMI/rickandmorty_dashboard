import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./Searchbar.style";

interface ISearchbarProps {
  onChange: Function;
}
export const Searchbar: React.FC<ISearchbarProps> = ({ onChange }) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => onChange(e.target.value)}
      />
    </Search>
  );
};
