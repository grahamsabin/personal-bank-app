import React, {Component} from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordCheck: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordCheck: this.state.passwordCheck
        };

        console.log(newUser);
    };

    render() {
        const {errors} = this.state;

        return(
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <br/>
                        <Link to="/" className="btn btn-small blue-grey lighten-5 grey-text">
                            Back to Home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> Below
                            </h4>
                            <p >
                                Have an existing account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit = {this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    id="name"
                                    type="text"
                                />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    errors={errors.email}
                                    id = "email"
                                    type = "text"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input  
                                    onChange={this.onChange}
                                    value = {this.state.password}
                                    error = {errors.password}
                                    id="password"
                                    type = "password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value = {this.state.passwordCheck}
                                    error={errors.passwordCheck}
                                    id="passwordCheck"
                                    type="password"
                                />
                                <label htmlFor="passwordCheck">Confirm Password</label>
                            </div>
                            <div className="col s12" style={{paddingLeft: "11.250px" }}>
                                <button
                                    style = {{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type = "submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >
                                        Sign Up
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
                                
    }

}

export default Register;

    
