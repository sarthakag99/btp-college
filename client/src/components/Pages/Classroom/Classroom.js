import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from "react-router-dom";
import ClassroomNavbar from './ClassroomNavbar';
// import ClassroomRouter from './ClassroomRouter';
const Classroom = () => {
    const ClassroomRouter =withRouter(ClassroomNavbar);
    return (
        <div>
            {/* <br></br> */}
            {/* <ClassroomNavbar/> */}
            <Router>
                <ClassroomRouter />
            </Router>
        </div>
    )
}

export default Classroom;
