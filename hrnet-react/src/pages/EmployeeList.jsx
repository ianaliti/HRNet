import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';

export default function EmployeeList() {
    const dispatch = useDispatch();

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
                    validationShema={Yup.object({
                        firstName: Yup.string().required("Required"),
                        lastName: Yup.string().required("Required"),
                        dateOfBirth: Yup.string().required("Required"),
                        startDate: Yup.string().required("Required"),
                        street: Yup.string().required("Required"),
                        city: Yup.string().required("Required"),
                        state: Yup.string().required("Required"),
                        zipCode: Yup.number().required("Required").min(10000, "Must be a 5-digit number"),
                        department: Yup.string().required("Required"),
                    })}
                    onSubmit={(values) => dispatch(addEmployee(values))}
                >
                    <Form>
                        <div className='empolyee-form'>
                            <div className='personal-info'>
                                <label>First Name</label>
                                <Field type="text" name="firstName" />
                                <ErrorMessage name="firstName" component="div" />

                                <label>Last Name</label>
                                <Field type="text" name="lastName" />
                                <ErrorMessage name="lastName" component="div" />

                                <label>Date of Birth</label>
                                <Field name="dateOfBirth" type="text" />
                                <ErrorMessage name="dateOfBirth" component="div" />

                                <label>Start Date</label>
                                <Field name="startDate" type="text" />
                                <ErrorMessage name="startDate" component="div" />
                            </div>
                            <div className='address-department'>
                                <fieldset className="address">
                                    <legend>Address</legend>

                                    <label>Street</label>
                                    <Field name="street" type="text" />
                                    <ErrorMessage name="street" component="div" />

                                    <label>City</label>
                                    <Field name="city" type="text" />
                                    <ErrorMessage name="city" component="div" />

                                    <Field as="select" name="state">
                                        <option value="">-- Select --</option>
                                        <option value="NY">New York</option>
                                        <option value="CA">California</option>
                                    </Field>
                                    <ErrorMessage name="state" component="div" />

                                    <label>Zip Code</label>
                                    <Field name="zipCode" type="number" />
                                    <ErrorMessage name="zipCode" component="div" />
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
                                <ErrorMessage name="department" component="div" />
                            </div>
                        </div>

                        <button type='submit'>Save</button>
                    </Form>
                </Formik >
            </div>
            {/* <div id="confirmation" className="modal">Employee Created!</div> */}
        </div >
    )
}
