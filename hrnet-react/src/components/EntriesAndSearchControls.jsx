import React from 'react';
import { TextField } from '@mui/material';

export default function EntriesAndSearchControls({ rowsPerPage, handleChangeRowsPerPage, searchQuery, handleSearchChange }) {
    return (
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
    );
}
