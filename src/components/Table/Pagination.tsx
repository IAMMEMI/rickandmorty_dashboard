import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
interface ITablePaginationActionsProps {
  count: number;
  onPageChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
}

export const CustomTablePagination = (props: ITablePaginationActionsProps) => {
  return (
    <Stack spacing={2} style={{ width: "100%" }}>
      <Pagination
        count={props.count}
        color="primary"
        onChange={props.onPageChange}
      />
    </Stack>
  );
};
