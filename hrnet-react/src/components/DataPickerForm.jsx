import React from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const DatePickerForm = ({ values, setFieldValue, errors, touched }) => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label>Date of Birth</label>
        <div className="input-container">
            <DatePicker
                value={values.dateOfBirth}
                onChange={(value) => setFieldValue("dateOfBirth", value)}
                format="DD/MM/YYYY"
            />
            {errors.dateOfBirth && touched.dateOfBirth && (
                <div className="error">{errors.dateOfBirth}</div>
            )}
        </div>

        <label>Start Date</label>
        <div className="input-container">
            <DatePicker
                value={values.startDate}
                onChange={(value) => setFieldValue("startDate", value)}
                format="DD/MM/YYYY"
            />
            {errors.startDate && touched.startDate && (
                <div className="error">{errors.startDate}</div>
            )}
        </div>
    </LocalizationProvider>
);
