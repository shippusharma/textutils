import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enable", "success");
      // document.title = "Textutils - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enable", "success");
      // document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
      {/* 1. one way - simple*/}
      {/* <Navbar/> */}
      {/* 2. another way - when using props and PropTypes*/}
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about"><About mode={mode}/></Route>
          <Route exact path="/"><TextForm showAlert={showAlert} mode={mode} /></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
