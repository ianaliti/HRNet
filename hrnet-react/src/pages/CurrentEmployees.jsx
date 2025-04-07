import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


export default function CurrentEmployees() {
    const employees = useSelector((state) => state.employees.employees);

    const [orderDirection, setOrderDirection] = useState('asc');
    const [orderBy, setOrderBy] = useState('firstName');
    const [searchQuery, setSearchQuery] = useState('');

    const handleRequestSort = (property) => {
        const isAscending = orderBy === property && orderDirection === 'asc';
        setOrderDirection(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedEmployees = [...employees].sort((a, b) => {
        if (a[orderBy] < b[orderBy]) return orderDirection === 'asc' ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return orderDirection === 'asc' ? 1 : -1;
        return 0;
    });

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredEmployees = sortedEmployees.filter(employee =>
        Object.values(employee).some(value =>
            String(value).toLowerCase().includes(searchQuery)
        )
    );

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <TextField
                label="Search"
                variant="standard"
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{ mb: 2 }}
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
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
                        {filteredEmployees.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    No matching records found
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredEmployees.map((employee) => (
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
            <Link to="/">Home</Link>
        </div>
    )
}
