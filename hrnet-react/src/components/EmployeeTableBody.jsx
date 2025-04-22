import React from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';

export default function EmployeeTableBody({ currentRows }) {
    if (currentRows.length === 0) {
        return (
            <TableBody>
                <TableRow>
                    <TableCell colSpan={9} align="center">
                        No matching records found
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    }

    return (
        <TableBody>
            {currentRows.map((employee) => (
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
    );
}
