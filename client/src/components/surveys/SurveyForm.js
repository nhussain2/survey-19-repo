// Survey Form shows form for user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import "../../index.css";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className="survey19desc"
          style={{ textAlign: "center", padding: "10px" }}
        >
          Enter your survey details below to send to patients!
        </div>
        <div className="container">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            <div className="card white">
              <div
                className="container"
                style={{
                  padding: "20px",
                }}
              >
                {this.renderFields()}
              </div>
            </div>
            <Link to="/surveys" className="orange btn-flat white-text">
              <i className="material-icons left">cancel</i>
              Back
            </Link>
            <button type="submit" className="orange btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value!";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
