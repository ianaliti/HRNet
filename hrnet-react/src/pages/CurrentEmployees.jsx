import React from 'react'
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; 


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
                            <TableCell>1</TableCell>
                            <TableCell align='right'>First Name</TableCell>
                            <TableCell align='right'>Last Name</TableCell>
                            <TableCell align='right'>Date of Birth</TableCell>
                            <TableCell align='right'>Start Date</TableCell>
                            <TableCell align='right'>Adress</TableCell>
                            <TableCell align='right'>Department</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee) => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell align='right'>{employee.lastName}</TableCell>
                                <TableCell align='right'>{employee.dateOfBirth}</TableCell>
                                <TableCell align='right'>{employee.startDate}</TableCell>
                                {/* <TableCell align='right'>{employee.adress}</TableCell> */}
                                <TableCell align='right'>{employee.department}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <a href="index.html">Home</a>
        </div>
  )
}
