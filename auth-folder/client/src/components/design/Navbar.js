//THIS FILE CREATES THE STATIC NAVBAR
    //import component and link
    //Navbar extends component
    //use class of navbar
    //make logo link to home

import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
    render(){
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/" //this is a link to home
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="col s5 brand-logo center black-text"
                        >
                            <i className="material-icons">code</i>
                            GRAHAM
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;