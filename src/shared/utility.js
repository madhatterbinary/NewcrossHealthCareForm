import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const validate = (values) => {
    const errors = {};
      
    if (!values.summary) {
        errors.summary = "Content require";
    }
    if (!values.startDate) {
        errors.startDate = "Enter a date";
    }
    if (!values.address1) {
        errors.address1 = "Please enter House Number";
    }
    if (!values.address2) {
        errors.address2 = "Please enter City";
    }
    if (!values.address3) {
        errors.address3 = "Please enter Postcode";
    }
    if (!values.instructions) {
        errors.instructions = "Content require";
    }
    return errors;
};
export const renderFieldFirstForm = ({ input, label, type, textarea, meta: { touched, error, warning, invalid } }) => {
    const textareaType = <div><label>{label}</label>
    <div>
      <textarea id="firsttextarea" row={5} {...input} placeholder={label} type={type} /> 
    </div>
  </div>
    const inputType = <input {...input} placeholder={label}  type={type} className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;

    return (
        <div>
            <label>{label}</label>
            <div>
                {textarea ? textareaType : inputType}
                {touched && ((error && <span id="textareaerror">{error}</span>) || (warning && <span id="textareawarning">{warning}</span>))}
            </div>
        </div>
    );
};

export const renderInstructionFieldSecondForm = ({ input, label, type, textarea, meta: { touched, error, warning, invalid } }) => {
       
    const textareaType = <div><label>{label}</label>
    <div>
      <textarea id="instructions_text" row={5} {...input} placeholder={label} type={type} /> 
    </div>
  </div>
    const inputType = <input {...input} placeholder={label}  type={type} className={`form-control ${touched && invalid ? 'has-danger' : ''}`}/>;

    return (
        <div>
            <label>{label}</label>
            <div>
                {textarea ? textareaType : inputType}
                {touched && ((error && <span id="instructionerror">{error}</span>) || (warning && <span id="instructionwarning">{warning}</span>))}
            </div>
        </div>
    );
};

export const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
          <DatePicker id="datepicker" placeholderText="Click to select a date" {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
          {touched && error && <span>{error}</span>}
    </div>
  );
