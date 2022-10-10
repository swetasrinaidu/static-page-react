import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDOM from "react-dom"
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import {MainContent} from './Components/MainContent'; 
function Page(){
    return(
    <div className='page'>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
