
import React, {Component} from "react";
import './App.css';
 //importing pages into app.js
 import Navbar from "./components/design/Navbar";
 import LandingPage from "./components/design/LandingPage";

 class App extends Component {
   render() {
     return (
       <div className="App">
         <Navbar />
         <LandingPage />
        </div>

     );
   }
 }


export default App;
