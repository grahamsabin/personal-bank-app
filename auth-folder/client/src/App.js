import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/design/Navbar";
import LandingPage from "./components/design/LandingPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<LandingPage/>} />
          <Route path = "/register" element={<Register/>} />
          <Route path = "/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
        // <Routes>
        //   <div className="App">
            
        //     <Navbar />
        //     <Route exact path="/" component = {LandingPage} />
        //     <Route exact path="/register" component = {Register} />
        //   </div>
        // </Routes>

      
    );
  }
}



export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


