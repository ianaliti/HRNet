import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@mui/material';

const columns = [
    { id: "firstName", label: "First Name" },
    { id: "lastName", label: "Last Name" },
    { id: "dateOfBirth", label: "Date of Birth" },
    { id: "startDate", label: "Start Date" },
    { id: "street", label: "Street" },
    { id: "city", label: "City" },
    { id: "state", label: "State" },
    { id: "zipCode", label: "Zip Code" }
  ];

export default function EmployeeTableHeader({ orderBy, orderDirection, handleRequestSort }) {
    return (
        <TableHead>
            <TableRow>
                {columns.map((col) => (
                    <TableCell key={col.id} align="right">
                        <TableSortLabel
                            active={orderBy === col.id}
                            direction={orderBy === col.id ? orderDirection : 'asc'}
                            onClick={() => handleRequestSort(col.id)}
                        >
                            {col.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
