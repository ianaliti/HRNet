import React from 'react'
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; 
import { Link } from 'react-router-dom';


export default function CurrentEmployees() {
    const employees = useSelector((state) => state.employees.employees);

    console.log(employees)
  return (
    <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='right'>First Name</TableCell>
                            <TableCell align='right'>Last Name</TableCell>
                            <TableCell align='right'>Date of Birth</TableCell>
                            <TableCell align='right'>Start Date</TableCell>
                            <TableCell align='right'>Street</TableCell>
                            <TableCell align='right'>City</TableCell>
                            <TableCell align='right'>State</TableCell>
                            <TableCell align='right'>Zip Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
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
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link to="/">Home</Link>
        </div>
  )
}
