
import React,{useState} from 'react'


export default function Textform (props) {
    const handleUpClick = () => {
    //console.log("Converted to UpperCase "+text)
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase ! ","success")
}
const handleLoClick = () => {
    //console.log("Converted to UpperCase "+text)
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase ! ","success")
}
  
const handleClearClick = () => {
    //console.log("Converted to UpperCase "+text)
    let newText= ''
    setText(newText)
    props.showAlert("Text cleared ","success")
}
const handleOnChange = (event)=>{
    //console.log("on Change")
    setText(event.target.value)
}
    const [text, setText] = useState('');
    return (
        <>
    <div className="containers" style={{color:`${props.mode==='dark'?'white':'black'}`}}>
        <h1>{props.heading} </h1>
  <div className="mb-3">
    {/* <label htmlFor="myBox" className="form-label">text area</label> */}
    <textarea className="form-control" value= {text} id="myBox" style={{backgroundColor:`${props.mode==='light'?'dark':'light'}`}} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>



  </div>


  <div className="container my-5" style={{color:`${props.mode==='dark'?'white':'black'}`}}>
    <h1> Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>You will take {0.004*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>

  
  )
}
