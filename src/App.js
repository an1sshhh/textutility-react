
import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert = (message, type)=>{
        setAlert({message: message,
          type: type});
          setTimeout(() => {
            setAlert(null)
          }, 3000);
}

const toggleMode=()=>{
if (mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor = 'black';
  showAlert("Dark mode is enabled","success");
  
}else{
  setMode('light')
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode is enabled","success");
}
}
  return (
    <>
    {/* <Router> */}
<Navbar title = "Text Utility" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
{/* <Routes>
          <Route exact path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/" element={ */}
          <TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>
          {/* // }></Route> */}
{/* </Routes> */}
  
</div>
{/* </Router> */}
    </>
  );
}

export default App
