import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import states from '../data/data.js';

export default function EmployeeList() {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid first name")
            .required("Required"),
        lastName: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid last name")
            .required("Required"),
        dateOfBirth: Yup.string()
            .matches(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format")
            .required("Required"),
        startDate: Yup.string()
            .matches(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format")
            .required("Required"),
        street: Yup.string().required("Required"),
        city: Yup.string()
            .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, "Invalid city name")
            .required("Required"),
        state: Yup.string().required("Required"),
        zipCode: Yup.string()
            .matches(/^\d{5}$/, "Must be a 5-digit number")
            .required("Required"),
        department: Yup.string().required("Required"),
    });

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
                    onSubmit={(values) => dispatch(addEmployee(values))}
                // alert("confirmation")
                >
                    {({ errors, touched }) => (
                    <Form>
                        <div className='empolyee-form'>
                            <div className='personal-info'>
                                <label>First Name</label>
                                <Field type="text" name="firstName" />
                                {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}

                                <label>Last Name</label>
                                <Field type="text" name="lastName" />
                                {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}

                                <label>Date of Birth</label>
                                <Field name="dateOfBirth" type="text" />
                                {errors.dateOfBirth && touched.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}


                                <label>Start Date</label>
                                <Field name="startDate" type="text" />
                                {errors.startDate && touched.startDate && <div className="error">{errors.startDate}</div>}
                            <div className='address-department'>
                                <fieldset className="address">
                                    <legend>Address</legend>

                                    <label>Street</label>
                                    <Field name="street" type="text" />
                                    {errors.street && touched.street && <div className="error">{errors.street}</div>}

                                    <label>City</label>
                                    <Field name="city" type="text" />
                                    {errors.city && touched.city && <div className="error">{errors.city}</div>}

                                    <Field as="select" name="state">
                                        <option value="">-- Select --</option>
                                        {states.map((state) => (
                                            <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
                                        ))}
                                    </Field>
                                    {errors.state && touched.state && <div className="error">{errors.state}</div>}

                                    <label>Zip Code</label>
                                    <Field name="zipCode" type="number" />
                                    {errors.zipCode && touched.zipCode && <div className="error">{errors.zipCode}</div>}
                                </fieldset>

                                <label htmlFor="department">Department</label>
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
                        </div>

                        <button type='submit'>Save</button>
                        </div>
                    </Form>
                )}
                </Formik >
            </div>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </div >
    )
}
