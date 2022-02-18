import React from "react";
 
// We use Route in order to define the different routes of our application
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";

import Register from "./components/register";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path = "/" element = {<LandingPage/>} />
       <Route path="/register" element={<Register />} />
     </Routes>
   </div>

   

     /* <Routes>
      <Route path = "/landingpage" element={<LandingPage/>}/>

       <Route path="/register" element={<Register />} />
     </Routes> */
 
 );
};
 
export default App;