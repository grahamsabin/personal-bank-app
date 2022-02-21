import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return(
            <div style = {{ height: "70vh"}} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a personal banking app with Plaid and the MERN stack
                        </h4>
                        <br/>
                        <div className="col s6">
                            <Link 
                                to = "/register"
                                style = {{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                        <Link 
                                to = "/login"
                                style = {{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;

