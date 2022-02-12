import React from "react";

// We'll use Route in order to define the various routes in our application
import { Route, Routes } from "react-router-dom";

// Here we are simply importing all components we made
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path = "/" element = {<RecordList />} />
                <Route path = "/edit:id" element = {<Edit />} />
                <Route path = "/create" element = {<Create />} />
            </Routes>
        </div>
    );
};

export default App;