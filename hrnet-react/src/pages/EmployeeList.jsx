import React from 'react'
import { useForm } from 'react-hook-form';

export default function EmployeeList() {
    const { handleSubmit, formState: { errors } } = useForm()
    const { handleSubmit: handleSubmitRegister, formState: { errors: errorsRegister }, reset } = useForm();


    return (
        <div>
            <div class="title">
                <h1>HRnet</h1>
            </div>
            <div class="container">
                <a href="employee-list.html">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label for="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                        <label for="start-date">Start Date</label>
                        <input id="start-date" type="text" />

                            <fieldset class="address">
                                <legend>Address</legend>

                                <label for="street">Street</label>
                                <input id="street" type="text" />

                                <label for="city">City</label>
                                <input id="city" type="text" />

                                <label for="state">State</label>
                                <select name="state" id="state"></select>

                                <label for="zip-code">Zip Code</label>
                                <input id="zip-code" type="number" />
                            </fieldset>

                            <label for="department">Department</label>
                            <select name="department" id="department">
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </form>

                    <button onclick="saveEmployee()">Save</button>
                </div>
                <div id="confirmation" class="modal">Employee Created!</div>
        </div>
    )
}
