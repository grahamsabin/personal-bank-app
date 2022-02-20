
import e from "express";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
    render() {
        return (
            <div style={{ height: "65vh" }} className = "container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a login/auth app with the{" "}
                            <span style = {{ fontFamily: "monospace"}}>MERN</span> stack from scratch
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Create a (minimal) full-stack app with user authentication via passport and JWTs
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to = "/registration"
                                style = {{
                                    width: "135px",
                                    borderRadius: "5px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                    Register
                                </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "135px",
                                    borderRadius: "5px",
                                    letterSpacing: "1px"
                                }}
                                className = "btn btn-large-flat waves-effect white black-text"
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