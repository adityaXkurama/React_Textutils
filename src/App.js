import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);


  const showalert=(massage,type)=>{
    setalert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

 const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.background='grey'
      showalert("Dark mode enabled","success");

      // setInterval(() => {
      //   document.title='textutils'
      // }, 2000);

      // setInterval(() => {
      //   document.title='TEXTUTILS'
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.background='white'
      showalert("light mode enabled","success")

    }
  }
  return (
    <>
      <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <Routes>
        <Route path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
        </>
  );
}

export default App;
