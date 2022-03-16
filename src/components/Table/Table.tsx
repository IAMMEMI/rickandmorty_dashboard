import React from "react";
import {
  TableHead,
  Fab,
  Paper,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Typography,
  useMediaQuery,
  Theme,
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
  const [, setPage] = React.useState<number>(0);
  const handleChangePage = (
    event: React.ChangeEvent<unknown> | null,
    newPage: number
  ) => {
    changePage(newPage);
    setPage(newPage);
  };
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        {isMobile ? (
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={`k-${index}`}>
                <TableCell>
                  {headers.map((h) => (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6">{h.value}</Typography>
                      <Typography variant="h6">{row[h.key]}</Typography>
                    </div>
                  ))}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {actions.map((a) => (
                      <Fab
                        style={{ margin: 5 }}
                        color="info"
                        size="small"
                        onClick={(e) => {
                          a.action(row);
                        }}
                      >
                        {a.icon(row)}
                      </Fab>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          <>
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
          </>
        )}
        <CustomTablePagination
          count={paginationInfo?.pages}
          onPageChange={handleChangePage}
        />
      </Table>
    </TableContainer>
  );
};
