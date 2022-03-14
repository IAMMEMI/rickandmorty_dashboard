import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface ITablePaginationActionsProps {
  count: number;
  /* page: number;
   */
  onPageChange: (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => void;
}

export const CustomTablePagination = (props: ITablePaginationActionsProps) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        color="primary"
        onChange={props.onPageChange}
      />
    </Stack>
  );
};
