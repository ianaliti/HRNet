import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    employees: null,
    error: null,
    success: null,
};

const authSlice = createSlice({
    name: "employee",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase("employee/fetchEmployees/pending", (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase("employee/fetchEmployees/fulfilled", (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
        
           .addCase("employee/fetchEmployees/rejected", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
           .addCase("employee/addEmployee/pending", (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase("employee/addEmployee/fulfilled", (state, action) => {
                state.loading = false;
                state.success = action.payload;
            })
            .addCase("employee/addEmployee/rejected", (state) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default authSlice.reducer;