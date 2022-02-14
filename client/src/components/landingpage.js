import React from "react";
import react from "react";
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

export default function LandingPage(){
    
        return(
            <div>
                
                <h1 className="centerText">Graham's Bank</h1>

                <div class = "centered">
                    <Link to = "/register" className="btn btn-primary">Register</Link>

                    <Link to = "/login" className="btn btn-outline-primary">Login</Link>
                </div>
            </div>
            
        )
    
}

//export default LandingPage;