import React from 'react';
import Joi from "joi-browser";
import Form from "../../../form/form";
import account from "../../../../services/accountService";
import FormContainer from "../../../form/formContainer/formContainer";
import auth from "../../../../services/authService";

class AccountUpdateForm extends Form {
    state = {
        data: {username: ''},
        errors: {},
        formError: '',
        formSuccess: ''
    };

    componentDidMount() {
        const user = auth.getCurrentUser()
        this.setState({data: {username: user.username}})
    }

    schema = {
        username: Joi.string()
            .required()
            .min(2)
            .max(50)
            .label("Username")
    }

    doSubmit = async () => {
        try {
            const {data} = this.state;
            await account.update(data)
            this.setState({formSuccess: "Successfully Updated"})
        } catch (e) {
            if (e.response && e.response.status === 400) {
                this.setState({formError: e.response.data});
            }
        }
    }

    render() {
        return (
            <FormContainer
                title="Update account"
                center={true}
                buttonLabel="Update"
                errors={this.validate()}
                formError={this.state.formError}
                formSuccess={this.state.formSuccess}
                onSubmit={this.handleSubmit}>
                {this.renderInput("username", "Username")}
            </FormContainer>
        );
    }
}

export default AccountUpdateForm;