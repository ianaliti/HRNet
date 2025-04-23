import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeesSlice';
import dayjs from "dayjs";
import { Modal } from 'modal-component-iana';
import { DatePickerForm } from '../components/DataPickerForm.jsx';
import { AddressForm } from '../components/AddressForm.jsx';
import { DepartmentSelect } from '../components/DepartmentSelect.jsx';


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
        dateOfBirth: Yup.mixed()
            .required("Date of Birth is required")
            .test("is-valid", "Invalid date", (value) => dayjs(value).isValid())
            .test(
                "is-past",
                "Date of Birth cannot be today or in the future",
                (value) => dayjs(value).isBefore(dayjs(), "day")
              ),
        startDate: Yup.mixed()
            .required("Start Date is required")
            .test("is-valid", "Invalid date", (value) => dayjs(value).isValid()),
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
        const formattedValues = {
            ...values,
            dateOfBirth: dayjs(values.dateOfBirth).format("DD/MM/YYYY"),
            startDate: dayjs(values.startDate).format("DD/MM/YYYY"),
          };
        dispatch(addEmployee(formattedValues));
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
                    initialValues={{ firstName: '', lastName: '', dateOfBirth: null, startDate: null, street: '', city: '', state: '', zipCode: '', department: '' }}
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

                                <DatePickerForm values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />

                                <AddressForm values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />

                                <DepartmentSelect values={values} errors={errors} touched={touched} />


                                <button type='submit'>Save</button>
                            </div>
                        </Form>
                    )}
                </Formik >
            </div>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen}/>
            )}
        </div >
    )
}
