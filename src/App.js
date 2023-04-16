import React,{Fragment} from 'react';
import './App.css';
import SpinnerContainer from "./components/Spinner/SpinnerContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Admin/Login";

class App extends React.Component{

 
  render(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(<SpinnerContainer/>)}/>
                <Route path="/admin" element={(<Login/>)}/>
            </Routes>
        </BrowserRouter>
  );
  }
}

export default App;
