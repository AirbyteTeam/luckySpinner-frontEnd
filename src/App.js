import React,{Fragment} from 'react';
import './App.css';
import SpinnerContainer from "./components/Spinner/SpinnerContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Admin/Login";
import AddCode from "./components/Admin/AddCode";
import ProtectedRoute from "./components/protectedRoute";

class App extends React.Component{

 
  render(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={(<SpinnerContainer/>)}/>
                <Route path="/login" element={(<Login/>)}/>
                <Route path="/admin" element={(<ProtectedRoute><AddCode/></ProtectedRoute>)}/>
            </Routes>
        </BrowserRouter>
  );
  }
}

export default App;
