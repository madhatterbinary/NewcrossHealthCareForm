import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchSkills } from '../store/actions';
import {Field, reduxForm, SubmissionError,getFormValues,isDirty,isPristine,isValid,isInvalid} from 'redux-form';
import { renderInstructionFieldSecondForm, validate } from '../shared/utility';
import * as actions from '../store/actions/index';

class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.renderAddressField = this.renderAddressField.bind(this);
        
    }

    componentDidMount() {
        $('a').removeClass('active');
        $('#header').children('a').eq(1).addClass('active'); 
    }

    renderAddressField(field) {
        return (
            <div>
                <input 
                type="text" 
                className="form-control" 
                {...field.input}
                />
                {field.meta.touched ? field.meta.error: ''}
            </div>
        )
     }
     handleFormSubmit(secondForm){
        let entireForm = {...secondForm, ...this.props.firstForm };
        this.props.sendEntireFormData(entireForm)
    }

    render() {
        const {handleSubmit, fields: { address1, address2, address3, instructions, uniform }} = this.props;
        return (
           <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div className="col-md-6">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="card-body">
                        <fieldset id="addressbox">
                            <label></label>
                            <Field id="address1" name="address1"  component={ this.renderAddressField} type="text" value="male" placeholder="Address Line 1" />
                            <label></label>
                            <Field id="address2" name="address2" component={ this.renderAddressField} type="text" value="male" placeholder="Address Line 2" />
                            <label></label>
                            <Field id="address3" name="address3" component={ this.renderAddressField} type="text" value="male" placeholder="Address Line 3" />
                        </fieldset>
                    </div>
                </div>
              </div> 
              <div className="col-md-6">
                <div className="card card-outline-secondary">
                    <div className="card-header">
                        <h6 className="mb-0">Access Instructions</h6>
                    </div>
                    <div id='carddate' className="card-body">
                            <fieldset id="textareaholder">
                                <label></label>
                                <Field id="textarea" name="instructions" textarea={true} component={renderInstructionFieldSecondForm} placeholder="Please add access instructions..." />
                            </fieldset>
                    </div>
                </div>
              </div> 
              <div className="col-md-6">
                <div id="uniformform" className="card card-outline-secondary">
                    <div className="card-header">
                        <h6 className="mb-0">IS UNIFORM REQUIRED?</h6>
                    </div>
                    <div id='genders' className="card-body">
                        <div className="form-group">
                            <fieldset id="radios" className="form-group row">
                                <legend className="col-form-legend col-sm-2"></legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                    <Field id="requireuni" name="uniform" component="input" type="radio" value="Yes"/>
                                        Yes
                                    </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                    <Field id="norequireuni" name="uniform" component="input" type="radio" value="No"/>
                                        No
                                    </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
              </div> 
              <button id="createpackageBtn" type="submit" className="btn btn-primary btn-lg">CREATE PACKAGE</button>
           </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstForm: state.firstForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    sendEntireFormData: dataForm => dispatch( actions.sendEntireFormData(dataForm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ 
    validate,
    form: 'FormCardSummary',
    fields: ['address1', 'address2','address3','instructions','uniform']
    
})(PackageDetails))