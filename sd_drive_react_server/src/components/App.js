import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import "../styles/App.css";

import MainPage from "./MainPage";
import About from "./About";
import Faq from "./Faq";
import Conditions from "./Conditions";
import RegistrationPage from "./RegistrationPage/RegistrationPage.js";

function App() {
    
    return (
      <Router>
            <Switch>
             <Route exact path="/RegistrationPage" component={RegistrationPage} />
             <Route exact path="/" component={MainPage} /> 
             <Route exact path="/About" component={About} /> 
             <Route exact path="/Faq" component={Faq} />
             <Route exact path="/conditions" component={Conditions} />
           </Switch>
      </Router>

    ); 
    
}

export default App;