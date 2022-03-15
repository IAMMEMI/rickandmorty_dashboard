import React from "react";
import {
  TableHead,
  Fab,
  Paper,
  TableRow,
  TableFooter,
  TableContainer,
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
  icon: (value: any) => JSX.Element;
  action: Function;
}

interface ICustomTableProps {
  headers: ITableHeaderElement[];
  rows: ITableBodyElement[];
  actions: IActionRow[];
  paginationInfo: any;
  changePage: Function;
}
export const CustomTable: React.FC<ICustomTableProps> = ({
  rows,
  headers,
  actions,
  paginationInfo,
  changePage,
}) => {
  const [, setPage] = React.useState(0);
  const handleChangePage = (
    event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    changePage(newPage);
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {headers.map((h) => (
            <TableCell>
              <Typography variant="h5">{h.value}</Typography>
            </TableCell>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
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
                    {a.icon(row)}
                  </Fab>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <CustomTablePagination
            count={paginationInfo?.pages}
            onPageChange={handleChangePage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
