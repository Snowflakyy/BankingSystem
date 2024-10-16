import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Button, Icon, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person3";
import { Box } from "@mui/material";
import { Column, Data, MappedUser } from "../../../AdminHome/AdminUserProfiles";
import { ColumnLoans, DataLoans } from "@/pages/AdminHome/AdminLoanRequest";
import { LoanProps } from "../../../../types/form";
import { connect } from "react-redux";
import { DLoanState, DUserAfterState } from "@/types";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import * as _actions from "../../../../actions/DLoans";
import { useNavigate } from "react-router-dom";

interface UsersTableProps {
  headers: Column[];
  body: MappedUser[];
}

interface LoansTableProps {
  headers: ColumnLoans[];
  body: DataLoans[];
}

export const LoanTable = ({ headers, body }: LoansTableProps, props: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleReject = (id: number) => {
    console.log(`Rejected loan for user ${id}`);
    // Implement rejection logic here
  };

  return (
    <Paper className="w-full overflow-hidden rounded-lg">
      <TableContainer className="max-h-[440px]">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="font-semibold"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {body
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {headers.map((column) => {
                      const value = row[column.id as keyof DataLoans];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "name" ? (
                            <div className="flex items-center gap-2">
                              <PersonIcon className="h-5 w-5" />
                              <span>{value}</span>
                            </div>
                          ) : column.id === "Approve/Reject" ? (
                            <div className="flex justify-center gap-2">
                              <Button className="bg-green-500 text-white hover:bg-green-600">
                                Approve
                              </Button>
                              <Button
                                className="bg-red-500 text-white hover:bg-red-600"
                                onClick={() => handleReject(row.id)}
                              >
                                Reject
                              </Button>
                            </div>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={body.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export const UsersTable: React.FC<UsersTableProps> = ({ headers, body }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const onRowClick = (user: MappedUser) => {
    hadnleRowClick(user.id);
  };
  const hadnleRowClick = (id: number) => {
    navigate(`/admin-home/user-profiles/:${id}`);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className="w-full overflow-hidden rounded-lg">
      <TableContainer className="max-h-[440px]">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="font-semibold"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                  >
                    {column.label}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {body
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {headers.map((column) => {
                      const value = row[column.id as keyof DUserAfterState];
                      return (
                        <TableCell
                          onClick={() => onRowClick(row)}
                          key={column.id}
                          align={column.align || "center"}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            gap={1}
                          >
                            {(() => {
                              switch (column.id) {
                                case "id":
                                  return <span>{value}</span>;
                                case "fullName":
                                  return (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      gap={1}
                                    >
                                      <PersonIcon />
                                      <span>{value}</span>
                                    </Box>
                                  );
                                case "email":
                                  return (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      gap={1}
                                    >
                                      <EmailIcon />
                                      <span>{value}</span>
                                    </Box>
                                  );
                                case "accounts":
                                  return (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      gap={1}
                                    >
                                      <AccountBalanceIcon />
                                      <span>{value}</span>
                                    </Box>
                                  );
                                case "loans":
                                  return (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      gap={1}
                                    >
                                      <AccountBalanceWalletIcon />
                                      <span>{value}</span>
                                    </Box>
                                  );
                                case "isEmployed":
                                  return (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      gap={1}
                                    >
                                      <WorkIcon />
                                      {value ? (
                                        <Box
                                          display="flex"
                                          alignItems="center"
                                          gap={1}
                                        >
                                          <CheckCircleIcon color="success" />
                                          <span>Employed</span>
                                        </Box>
                                      ) : (
                                        <Box
                                          display="flex"
                                          alignItems="center"
                                          gap={1}
                                        >
                                          <CancelIcon color="error" />
                                          <span>Unemployed</span>
                                        </Box>
                                      )}
                                    </Box>
                                  );
                                default:
                                  return <span>{value?.toString()}</span>;
                              }
                            })()}
                          </Box>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={body.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const mapStateToProps = (state: DLoanState) => {
  return {};
};
const mapActionsToProps = {
  approveLoan: _actions.update,
};

export const LoanApprove = connect(
  mapStateToProps,
  mapActionsToProps
)(LoanTable);
