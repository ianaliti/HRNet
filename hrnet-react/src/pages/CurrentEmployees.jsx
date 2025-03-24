import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; 


export default function CurrentEmployees() {
    const { loading, employees, error } = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    console.log(employees);
    const employee = [];

  return (
    <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>5</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employee.map((employee) => (
                            <TableRow key={1}>
                                <TableCell>1</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>4</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <a href="index.html">Home</a>
        </div>
  )
}
