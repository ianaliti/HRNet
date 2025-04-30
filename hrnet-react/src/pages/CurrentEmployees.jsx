import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, TableContainer, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import EntriesAndSearchControls from "../components/EntriesAndSearchControls";
import EmployeeTableHeader from "../components/EmployeeTableHeader";
import PaginationControls from "../components/PaginationControls";
import EmployeeTableBody from "../components/EmployeeTableBody";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default function CurrentEmployees() {
  const employees = useSelector((state) => state.employees.employees);

  console.log(employees);

  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState("firstName");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setPage(1);
  };

  const handleChangePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(1);
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    let valA = a[orderBy];
    let valB = b[orderBy];
  
    if (valA == null) valA = '';
    if (valB == null) valB = '';
  
    if (orderBy === "dateOfBirth" || orderBy === "startDate") {
      const format = "DD/MM/YYYY";
      const dateA = dayjs(valA, format);
      const dateB = dayjs(valB, format);
      return orderDirection === "asc"
        ? dateA.isAfter(dateB) ? 1 : -1
        : dateA.isBefore(dateB) ? 1 : -1;
    }

    const normA = String(valA).toLowerCase();
    const normB = String(valB).toLowerCase();
  
    if (normA < normB) return orderDirection === "asc" ? -1 : 1;
    if (normA > normB) return orderDirection === "asc" ? 1 : -1;
    return 0;
  });
  

  const filteredEmployees = sortedEmployees.filter((employee) =>
    Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchQuery)
    )
  );

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredEmployees.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);

  return (
    <div id="employee-div" className="employee-container">
      <h1>Current Employees</h1>

      <EntriesAndSearchControls
        rowsPerPage={rowsPerPage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />

      <TableContainer component={Paper}>
        <Table aria-label="table">
          <EmployeeTableHeader
            orderBy={orderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <EmployeeTableBody currentRows={currentRows} />
        </Table>
      </TableContainer>

      <div className="table-footer">
        <div>
          Showing {filteredEmployees.length === 0 ? 0 : indexOfFirstRow + 1} to{" "}
          {Math.min(indexOfLastRow, filteredEmployees.length)} of{" "}
          {filteredEmployees.length} entries
        </div>
        <PaginationControls
          page={page}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
      </div>

      <Link to="/" className="home-link">
        Home
      </Link>
    </div>
  );
}
