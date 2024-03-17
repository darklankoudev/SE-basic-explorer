import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import "../../Css/themes/echo.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import { API_BASE_URL } from "../../constants/constants";

const TableProposal = () => {
  const [proposals, setProposals] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);

  const votingPowerFormatted = (number) => {
    return (number / 1000000).toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/governance/proposals`);
        const proposalsData = res.data.proposals;
        proposalsData.sort((a, b) => b.id - a.id);
        setProposals(proposalsData);
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const formatVotes = (votes) => {
    return (votes / 1000000000000).toLocaleString(undefined, {
      maximumFractionDigits: 2 ,
    }) + "%";
  };

  const formatYayVotes = (row) => {
    return formatVotes(row.yay_votes);
  };

  const formatNayVotes = (row) => {
    return formatVotes(row.nay_votes);
  };

  const formatAbstainVotes = (row) => {
    return formatVotes(row.abstain_votes);
  };

  const columns = [
    { id: "id", label: "#", minWidth: 100 },
    { id: "kind", label: "Type Of Proposals", minWidth: 170 },
    { id: "author", label: "Author", minWidth: 175 },
    { id: "result", label: "Result", minWidth: 180 },
    { id: "start_epoch", label: "Start Epoch", minWidth: 80 },
    { id: "end_epoch", label: "End Epoch", minWidth: 80 },
    { id: "grace_epoch", label: "Grace Epoch", minWidth: 80 },
    // {
    //   id: "yay_votes",
    //   label: "Yay Votes (Yes)",
    //   minWidth: 170,
    //     format: formatYayVotes,
    // },
    // {
    //   id: "nay_votes",
    //   label: "Nay Votes (No)",
    //   minWidth: 170,
    //     format: formatNayVotes,
    // },
    // {
    //   id: "abstain_votes",
    //   label: "Abstain Votes (Abstain)",
    //   minWidth: 190,
    //     format: formatAbstainVotes,
    // },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 503 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, borderRight: "1px solid #e0e0e0", color: "white" }}
                  className="overflow-hidden bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] p-5"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <CircularProgress color="success" />
                  <div className="text-center mt-2">Please wait a few seconds</div>
                </TableCell>
              </TableRow>
            ) : (
            proposals
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value =
                        column.id === "author"
                          ? row.author.Account
                          : row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ border: "1px solid #e0e0e0" }}>
                          {column.format && typeof column.format === "function"
                            ? column.format(row, column.id)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={proposals.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableProposal;
