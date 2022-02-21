//REGISTER IS THE CLASS FOR THE REGISTRATIONUI
    //Users can go back home, go to log in if the have an account, or register
    //Registration infor gets sent to mongodb
    //Console.log registration info to make sure it's working

import React, {Component} from "react";
import { Link, withRouter} from "react-router-dom";
//import {withRouter} from "react-router"; //come back to this
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    //Added for Redux
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
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

        this.props.registerUser(newUser, this.props.history); //added for redux
        

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
                                    className={classnames("", {
                                        invalid: errors.name
                                      })}
                                />
                                <label htmlFor="name">Name</label>
                                <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    errors={errors.email}
                                    id = "email"
                                    type = "text"
                                    className={classnames("", {
                                        invalid: errors.email
                                      })}
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input  
                                    onChange={this.onChange}
                                    value = {this.state.password}
                                    error = {errors.password}
                                    id="password"
                                    type = "password"
                                    className={classnames("", {
                                        invalid: errors.password
                                      })}
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value = {this.state.passwordCheck}
                                    error={errors.passwordCheck}
                                    id="passwordCheck"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                      })}
                                />
                                <label htmlFor="passwordCheck">Confirm Password</label>
                                <span className="red-text">{errors.passwordCheck}</span>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  })

export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register));
    
