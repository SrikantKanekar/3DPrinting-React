import React from 'react';
import Form from "../../components/form/form";
import FormContainer from "../../components/form/formContainer";
import Joi from "joi-browser";
import auth from "../auth/authService";

class ResetPasswordForm extends Form {
    state = {
        data: {oldPassword: "", newPassword: "", confirmPassword: ""},
        errors: {},
        formError: ''
    };

    schema={
        oldPassword: Joi.string()
            .required()
            .label("Password"),
        newPassword: Joi.string()
            .required()
            .min(4)
            .label("Password"),
        confirmPassword: Joi.string()
            .required()
            .min(4)
            .label("Password")
    }

    doSubmit = async () => {
        try {
            const {data} = this.state;
            await auth.resetPassword(data)
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({formError: ex.response.data});
            }
        }
    }

    render() {
        return (
            <FormContainer
                button="Reset"
                errors={this.validate()}
                formError={this.state.formError}
                onSubmit={this.handleSubmit}>
                {this.renderInput("oldPassword", "Old Password", "password")}
                {this.renderInput("newPassword", "New Password", "password")}
                {this.renderInput("confirmPassword", "Confirm Password", "password")}
            </FormContainer>
        );
    }
}

export default ResetPasswordForm;