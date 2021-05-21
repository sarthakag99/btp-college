import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Achievements from "./components/Pages/Achievements/Achievements";
import Login from "./components/Pages/Login/Login";
import Research from "./components/Pages/Research/Research";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Lab from "./components/Pages/Lab/Lab";
import Classroom from "./components/Pages/Classroom/Classroom";
import Academics from "./components/Pages/Academics/Academics";
 
const MainRouter = () => (
    <div>
        <Router>
        <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/achievements" exact component={Achievements} />
                <Route path="/research" exact component={Research} />
                <Route path="/login" exact component={Login} />
                <Route path="/lab" exact component={Lab} />
                <Route path="/academics" exact component={Academics} />
                <Route path="/classroom" exact component={Classroom} />
            </Switch>
        {/* <Footer/> */}
        </Router>
    </div>
); 
export default MainRouter;