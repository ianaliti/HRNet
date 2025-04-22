import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';

const columns = ['firstName', 'lastName', 'dateOfBirth', 'startDate', 'street', 'city', 'state', 'zipCode'];

export default function EmployeeTableHeader({ orderBy, orderDirection, handleRequestSort }) {
    return (
        <TableHead>
            <TableRow>
                {columns.map((col) => (
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
    );
}
