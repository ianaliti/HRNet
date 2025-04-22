import React from 'react';

export default function PaginationControls({ page, totalPages, handleChangePage }) {
    return (
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
    );
}
