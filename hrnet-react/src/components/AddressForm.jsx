import React from 'react';
import { Field } from 'formik';
import states from '../data/data';

 export const AddressForm = ({ values, setFieldValue, errors, touched }) => (
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
            <Field as="select" name="state" className='custom-select'>
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
);