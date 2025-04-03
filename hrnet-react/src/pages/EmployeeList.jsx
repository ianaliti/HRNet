import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import states from '../data/data.js';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";


export default function EmployeeList() {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid name")
            .required("First Name is required"),
        lastName: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid name")
            .required("Last Name is required"),
        dateOfBirth: Yup.string()
            .matches(/^\d{4}-\d{2}-\d{2}$/, "Use DD-MM-YYYY format")
            .required("Date of Birth is required")
            .test(
                "is-past",
                "Date of Birth cannot be today or in the future",
                (value) => value && dayjs(value).isBefore(dayjs(), "day")
            ),
        startDate: Yup.string()
            .matches(/^\d{4}-\d{2}-\d{2}$/, "Use DD-MM-YYYY format")
            .required("Start Date is required"),
        street: Yup.string().required("Street address is required"),
        city: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "City is required")
            .required("Required"),
        state: Yup.string().required("Please select a state"),
        zipCode: Yup.string()
            .matches(/^\d{5}$/, "Zip Code must be a 5-digit number")
            .required("Zip Code is required"),
        department: Yup.string().required("Please select a department"),
    });

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addEmployee(values));
        setModalOpen(true);
        resetForm();
    };

    return (
        <div className='main'>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to='/current-employee'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Formik
                    initialValues={{ firstName: '', lastName: '', dateOfBirth: '', startDate: '', street: '', city: '', state: '', zipCode: '', department: '' }}
                    validationSchema={validationSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                    onSubmit={handleSubmit}

                >
                    {({ values, setFieldValue, errors, touched }) => (
                        <Form>
                            <div className='empolyee-form'>

                                <label>First Name</label>
                                <div className="input-container">
                                    <Field type="text" name="firstName" />
                                    {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
                                </div>

                                <label>Last Name</label>
                                <div className="input-container">
                                    <Field type="text" name="lastName" />
                                    {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                                </div>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <label>Date of Birth</label>
                                    <div className="input-container">
                                        <DatePicker
                                            value={values.dateOfBirth ? dayjs(values.dateOfBirth) : null}
                                            onChange={(value) => setFieldValue("dateOfBirth", value ? dayjs(value).format("YYYY-MM-DD") : "")}
                                            format="DD/MM/YYYY"
                                        />
                                        {errors.dateOfBirth && touched.dateOfBirth && (
                                            <div className="error">{errors.dateOfBirth}</div>
                                        )}
                                    </div>


                                    <label>Start Date</label>
                                    <div className="input-container">
                                        <DatePicker
                                            value={values.startDate ? dayjs(values.startDate) : null}
                                            onChange={(value) => setFieldValue("startDate", value ? dayjs(value).format("YYYY-MM-DD") : "")}
                                            format="DD/MM/YYYY"
                                        />
                                        {errors.startDate && touched.startDate && (
                                            <div className="error">{errors.startDate}</div>
                                        )}
                                    </div>

                                </LocalizationProvider>


                                <fieldset className="address">
                                    <legend>Address</legend>

                                    <label>Street</label>
                                    <div className="input-container">
                                        <Field name="street" type="text" />
                                        {errors.street && touched.street && <div className="error">{errors.street}</div>}
                                    </div>


                                    <label>City</label>
                                    <div className="input-container">
                                        <Field name="city" type="text" />
                                        {errors.city && touched.city && <div className="error">{errors.city}</div>}
                                    </div>

                                    <div className="input-container">
                                        <Field as="select" name="state">
                                            <option value="">-- Select --</option>
                                            {states.map((state) => (
                                                <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                                            ))}
                                        </Field>
                                        {errors.state && touched.state && <div className="error">{errors.state}</div>}
                                    </div>

                                    <label>Zip Code</label>
                                    <div className="input-container">
                                        <Field name="zipCode" type="text" />
                                        {errors.zipCode && touched.zipCode && <div className="error">{errors.zipCode}</div>}
                                    </div>
                                </fieldset>

                                <label htmlFor="department">Department</label>
                                <div className="input-container">
                                    <Field name="department" as="select">
                                        <option value="">-- Select --</option>
                                        <option value="sales">Sales</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="human-resources">Human Resources</option>
                                        <option value="legal">Legal</option>
                                    </Field>
                                    {errors.department && touched.department && <div className="error">{errors.department}</div>}
                                </div>


                                <button type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
                </Formik >
            </div>
            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Employee Created!</p>
                        <button onClick={() => setModalOpen(false)}>OK</button>
                    </div>
                </div>
            )}
        </div >
    )
}
