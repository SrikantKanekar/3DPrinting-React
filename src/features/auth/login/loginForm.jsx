import React from "react";
import {Redirect} from "react-router-dom";
import Joi from "joi-browser";
import Form from "../../../components/form/form";
import auth from "../authService";
import FormContainer from "../../../components/form/formContainer";

class LoginForm extends Form {
    state = {
        data: {email: "", password: ""},
        errors: {},
        formError: ''
    };

    schema = {
        email: Joi.string()
            .required()
            .email()
            .label("Email"),
        password: Joi.string()
            .required()
            .label("Password")
    };

    doSubmit = async () => {
        try {
            const {data} = this.state;
            await auth.login(data.email, data.password);

            const {state} = this.props.location;
            window.location = state ? state.from.pathname : "/";
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({formError: ex.response.data});
            }
        }
    };

    render() {
        if (auth.getCurrentUser()) return <Redirect to="/"/>;
        return (
            <FormContainer
                title="Login"
                button="Login"
                errors={this.validate()}
                formError={this.state.formError}
                onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email")}
                {this.renderInput("password", "Password", "password")}
            </FormContainer>
        );
    }
}

export default LoginForm;