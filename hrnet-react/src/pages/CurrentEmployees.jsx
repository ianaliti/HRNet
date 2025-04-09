import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


export default function CurrentEmployees() {
    const employees = useSelector((state) => state.employees.employees);

    const [orderDirection, setOrderDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('firstName');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleRequestSort = (property) => {
        const isAscending = orderBy === property && orderDirection === 'asc';
        setOrderDirection(isAscending ? 'desc' : 'asc');
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
        if (a[orderBy] < b[orderBy]) return orderDirection === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return orderDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const filteredEmployees = sortedEmployees.filter(employee =>
        Object.values(employee).some(value =>
            String(value).toLowerCase().includes(searchQuery)
        )
    );

    const indexOfLastRow = page * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredEmployees.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredEmployees.length / rowsPerPage);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div className="controls-top">
                <div className="show-entries">
                    <label>Show </label>
                    <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <label> entries</label>
                </div>

                <TextField
                    label="Search"
                    variant="standard"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="table">
                    <TableHead>
                        <TableRow>
                            {['firstName', 'lastName', 'dateOfBirth', 'startDate', 'street', 'city', 'state', 'zipCode']
                                .map((col) => (
                                    <TableCell key={col} align="right">
                                        <TableSortLabel
                                            active={orderBy === col}
                                            direction={orderBy === col ? orderDirection : 'asc'}
                                            onClick={() => handleRequestSort(col)}
                                        >
                                            {col.charAt(0).toUpperCase() + col.slice(1)}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentRows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={9} align="center">
                                    No matching records found
                                </TableCell>
                            </TableRow>
                        ) : (
                            currentRows.map((employee) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{employee.firstName}</TableCell>
                                    <TableCell align='right'>{employee.lastName}</TableCell>
                                    <TableCell align='right'>{employee.dateOfBirth}</TableCell>
                                    <TableCell align='right'>{employee.startDate}</TableCell>
                                    <TableCell align='right'>{employee.street}</TableCell>
                                    <TableCell align='right'>{employee.city}</TableCell>
                                    <TableCell align='right'>{employee.state}</TableCell>
                                    <TableCell align='right'>{employee.zipCode}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="table-footer">
                <div>
                    Showing {filteredEmployees.length === 0 ? 0 : indexOfFirstRow + 1} to{' '}
                    {Math.min(indexOfLastRow, filteredEmployees.length)} of {filteredEmployees.length} entries
                </div>
                <div className="pagination-controls">
                    <button onClick={() => handleChangePage(page - 1)} disabled={page === 1}>
                        Previous
                    </button>
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => handleChangePage(Number(e.target.value))}
                        min={1}
                        max={totalPages}
                        className="pagination-input"
                    />
                    <span>of {totalPages}</span>
                    <button onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>
                        Next
                    </button>
                </div>
            </div>

            <Link to="/" className="home-link">Home</Link>
        </div>
    )
}
