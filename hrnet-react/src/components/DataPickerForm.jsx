import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const DatePickerForm = ({ values, setFieldValue, errors, touched }) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <label>Date of Birth</label>
    <div className="input-container">
      <DatePicker
        value={values.dateOfBirth}
        onChange={(value) => setFieldValue("dateOfBirth", value ? value.format("DD/MM/YYYY") : "")}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            fullWidth: true,
            variant: "outlined",
            sx: {
              "& .MuiOutlinedInput-root": {
                borderRadius: 0, 
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: 0,
              },
              "& .MuiInputBase-root": {
                borderRadius: 0, 
              },
              "& .MuiSvgIcon-root": {
                borderRadius: 0, 
              },
            },
          },
        }}
      />
      {errors.dateOfBirth && touched.dateOfBirth && (
        <div className="error">{errors.dateOfBirth}</div>
      )}
    </div>

    <label>Start Date</label>
    <div className="input-container">
      <DatePicker
        value={values.startDate}
        onChange={(value) => setFieldValue("startDate", value ? value.format("DD/MM/YYYY") : "")}
        format="DD/MM/YYYY"
        slotProps={{
            textField: {
              fullWidth: true,
              variant: "outlined",
              sx: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0, 
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: 0, 
                },
                "& .MuiInputBase-root": {
                  borderRadius: 0, 
                },
                "& .MuiSvgIcon-root": {
                  borderRadius: 0,
                },
              },
            },
          }}
      />
      {errors.startDate && touched.startDate && (
        <div className="error">{errors.startDate}</div>
      )}
    </div>
  </LocalizationProvider>
);
