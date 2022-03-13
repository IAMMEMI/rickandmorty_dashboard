import React from "react";
import {
  TableHead,
  Fab,
  Paper,
  TableRow,
  TableFooter,
  TableContainer,
  TablePagination,
  TableCell,
  TableBody,
  Table,
  Typography,
} from "@mui/material";
import { CustomTablePagination } from "./Pagination";

interface ITableHeaderElement {
  key: string;
  value: string;
}

export interface ITableBodyElement {
  [key: string]: string | Date;
}

interface IActionRow {
  icon: JSX.Element;
  action: Function;
}

interface ICustomTableProps {
  headers: ITableHeaderElement[];
  rows: ITableBodyElement[];
  actions: IActionRow[];
}
export const CustomTable: React.FC<ICustomTableProps> = ({
  rows,
  headers,
  actions,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {headers.map((h) => (
            <TableCell>
              <Typography variant="h6">{h.value}</Typography>
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, index) => (
            <TableRow key={`k-${index}`}>
              {headers.map((h) => (
                <TableCell component="th" scope="row">
                  <Typography variant="body1">{row[h.key]}</Typography>
                </TableCell>
              ))}
              {actions.map((a) => (
                <TableCell>
                  <Fab
                    color="info"
                    size="small"
                    onClick={(e) => {
                      a.action(row);
                    }}
                  >
                    {a.icon}
                  </Fab>
                </TableCell>
              ))}
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={CustomTablePagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
