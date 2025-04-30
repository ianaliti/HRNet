import React from 'react';
import { Field } from 'formik';

export const DepartmentSelect = ({ errors, touched }) => (
    <>
        <label htmlFor="department">Department</label>
        <div className="input-container">
            <Field name="department" as="select" className='custom-select'>
                <option value="">-- Select --</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="engineering">Engineering</option>
                <option value="human-resources">Human Resources</option>
                <option value="legal">Legal</option>
            </Field>
            {errors.department && touched.department && <div className="error">{errors.department}</div>}
        </div>
    </>
);
