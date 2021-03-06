import React, { Component } from "react";
import { Link } from "react-router-dom";

//for redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    //FOR REDUX
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
    if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    //////////////

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = async e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        // fetch('http://localhost:5010/api/users/login', {
        //     method: 'POST',
        //     body: {
        //         email: userData.email,
        //         password: userData.password
        //     }
        // })

        // await fetch("http://localhost:5010/record/add", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(userData),
        //   })

        await this.props.loginUser(userData); // since we handle the redirect -- for redux

        //console.log(userData);
    };
    
    render(){
        const {errors} = this.state;

        return(
           <div className="container">
               <div className = "row">
                    <div className="col s8 offset-s2">
                        <br/>
                        <Link to="/" className="btn btn-small blue-grey lighten-5 grey-text">
                            Back to Home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Login</b> Below
                            </h4>
                            <p >
                                Don't have an existing account? <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"

                                    className={classnames("", {
                                        invalid: errors.email || errors.emailnotfound
                                      })}

                                />
                                <label htmlFor="email">Email</label>

                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>


                            </div>
                            <div className = "input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error = {errors.password}
                                    id="password"
                                    type="password"

                                    className={classnames("", {
                                        invalid: errors.password || errors.passwordincorrect
                                      })}

                                />
                                <label htmlFor="password">Password</label>

                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>

                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px"}}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type = "submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >Login
                                    </button>
                            </div>
                        </form>
                      </div>  
               </div>
           </div>
        )
    }
}

//export default Login;

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);
  