import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSkills } from '../store/actions';
import HeaderBar from '../components/HeaderBar';
import {Field, reduxForm, SubmissionError,getFormValues,isDirty,isPristine,isValid,isInvalid} from 'redux-form';
import * as actions from '../store/actions/index';
import { renderFieldFirstForm, renderDatePicker, validate } from '../shared/utility';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.onfetchSkills(); 
    }

    addSkillHandler(event) {
        var item = document.getElementById("skillmenu");
        var option = document.createElement("option");
        option.text = document.getElementById("addedSkill").value;
        if(option.text !== ""){
            item.add(option);
        }  
    }

    handleFormSubmit(formProbs){
        this.props.onFirstFormData(formProbs);
        this.props.history.push('/packagedetails');
    }

    renderDatePickerField(field) {
       return (
           <div>
               <input 
               id="datepicker"
               className="form-control" 
               type="string"
               placeholder="dd/mm/yyyy"
               {...field.input}
               />
               {field.meta.touched ? field.meta.error: ''}
           </div>
       )
    }

    render() {

        if(this.props.skills.length === undefined){
           return <div></div>;
        } else {
            const { handleSubmit, pristine, reset, submitting, fields: { startDate, endDay, summary, selectedSkill, genderselected } } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div id="first_row" className="row">
                    <div className="col-md-6">
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h6 className="mb-0">CLIENT SUMMARY</h6>
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className="form-group">
                                        <label id='text_area_label'></label>
                                        <Field name="summary" type="text" textarea={true} component={renderFieldFirstForm} onChange={this.onClientSummary} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div className="card-header">
                                <h6 className="mb-0">DURATION OF PACKAGE</h6>
                            </div>
                            <div id='carddate' className="card-body">
                                <div className="row">
                                    <div id='calendar' className="col-md">
                                        <div id="mainpicker" className="col-md">
                                            <fieldset>
                                                <label id="stDay">Start Date</label>
                                                <Field id="startDate" name="startDate" component={renderDatePicker}  />

                                            </fieldset>

                                        </div>
                                    </div>
                                    <div id='enddate' className="col-md">
                                        <label id='endDate' htmlFor="enddate">End Date</label>
                                        <div id='durationbox' className="col-sm-10">
                                            <div id='ongoingSpecific' className="form-check-col">
                                                <fieldset>
                                                    <label id='ongoingtext'>Ongoing</label>
                                                    <Field id='ongoinginput' name="endDate" component="input" type="radio" value="ongoing" />
                                                    <label id='specifictext'>Specific</label>
                                                    <Field id='specificinput' name="endDate" component="input" type="radio" value="specific" />
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
                <div id="second_row" className="row">
                    <div className="col-md-6">
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h6 className="mb-0">SKILLS & COMPETENCIES REQUIRED</h6>
                            </div>
                            <div id='skill_card' className="card-body">
                                    <fieldset>
                                        <Field id="skillmenu" name="skill" component="select" >
                                            <option value="none">Select Skill or Competency</option>
                                            {this.props.skills.map((skill, i) => {return <option value={skill} key={skill}>{skill}</option>})}
                                        </Field>
                                        <div id='arrow'>
                                        <i className="fa fa-angle-down"></i>
                                        </div>
                                        <div>
                                            <i id='skills_btn' className="fa fa-plus"></i><button id="addBtn" type="button" className="btn btn-primary" onClick={this.addSkillHandler}>Add Additional Skill</button>
                                            <Field id="addedSkill" name="addedSkills" component="input" type="text" placeholder="Enter skill" onkeyup="callme(this);"/>
                                        </div>
                                    </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-outline-secondary">
                            <div className="card-header">
                                <h6 className="mb-0">STAFF GENDER PREFERENCES</h6>
                            </div>
                            <div id='genders' className="card-body">
                                <div className="form-group">
                                    <fieldset id="radios" className="form-group row">
                                        <legend className="col-form-legend col-sm-2"></legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <Field name="gender" component="input" type="radio" value="None" />
                                                <label id="none" className="form-check-label">None</label>

                                            </div>
                                            <div className="form-check">

                                                <Field name="gender" component="input" type="radio" value="Male"/>
                                                <label id="male" className="form-check-label">Male </label>

                                            </div>
                                            <div className="form-check">

                                                <Field name="gender" component="input" type="radio" value="Female"/>
                                                <label id="female" className="form-check-label">Female</label>

                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>     
                    </div>
                </div>
                <button id="nextBtn" type="submit" className="btn btn-primary">NEXT</button>
                </form>
            </div>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        skills:state.skills
      };
}
const mapDispatchToProps = dispatch => {
    return {
        onfetchSkills: () => dispatch(actions.fetchSkills()),
        onFirstFormData: data => dispatch( actions.getFirstFormData(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({ 
    form: 'GeneralInfo',
    fields: ['summary', 'endDate','selectedSkill','genderselected','startDate'],
    validate
})(GeneralInfo))