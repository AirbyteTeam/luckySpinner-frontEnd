import React,{Fragment} from 'react';
import Spinner from './components/Spinner/Spinner'
import SpinnerMessage from './components/SpinnerMessage/SpinnerMessage'
import powerbar from './images/powerbar.svg'
import './App.css';


class App extends React.Component{

 
  render(){
    return (
      <div className="SpinnerSection">
        <Spinner />
        <SpinnerMessage />
      </div>
  );
  }
}

export default App;
