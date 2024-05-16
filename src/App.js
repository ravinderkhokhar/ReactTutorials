//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('dark');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  
  const toogleMode =(e)=>{
    setMode(e.target.value);
    console.log(e.target.value);
      if(e.target.value === 'Blue'){
        setMode('dark');
        setMode1('light');
        document.body.style.backgroundColor='#01327A';
        document.getElementById("navbar").style.backgroundColor='#011E49';
        // document.getElementById("uperBtn").style.backgroundColor='#011E49';
        // document.getElementById("uperBtn").style.color='#ffffff';
        // document.getElementById("lowerBtn").style.backgroundColor='#011E49';
        // document.getElementById("lowerBtn").style.color='#ffffff';
        // document.getElementById("clearBtn").style.backgroundColor='#011E49';
        // document.getElementById("clearBtn").style.color='#ffffff';
        showAlert("Blue Mode has been enabled","success");
        document.title = 'TextUtils - Blue Mode';
        setInterval(() => {
          document.title = 'TextUtils is Amazing Application';
        }, 2000);
        setInterval(() => {
          document.title = 'TextUtils is just Wow!';
        }, 1500);
      } else if(e.target.value === 'Green'){
        setMode('dark');
        setMode1('light');
        document.body.style.backgroundColor='#12C53F';
        document.getElementById("navbar").style.backgroundColor='#006030';
        // document.getElementById("uperBtn").style.backgroundColor='#006030';
        // document.getElementById("uperBtn").style.color='#E1ED56';
        // document.getElementById("lowerBtn").style.backgroundColor='#006030';
        // document.getElementById("lowerBtn").style.color='#E1ED56';
        // document.getElementById("clearBtn").style.backgroundColor='#006030';
        // document.getElementById("clearBtn").style.color='#E1ED56';
        showAlert("green Mode has been enabled","success");
        document.title = 'TextUtils - Green Mode';
      } else{
        setMode('light');
        setMode1('dark');
        document.body.style.backgroundColor='#e8e9eb';
        showAlert("Light Mode has been enabled","success");
        document.title = 'TextUtils - light Mode';
      }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutTxt="About TextUtils" mode={mode} txtMode={mode1} toogleMode={toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>          
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/about" ><About /></Route> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text for analysis below" txtMode={mode1}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
