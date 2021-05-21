import React from "react";
import MainRouter from "../MainRouter";
import Header from "./Header/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div>
          <Router>
            <MainRouter />
           </Router>  
            
        </div>
    );
}
export default App;