import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("Converted to uppercase","success")

    }
    const handleOnChange=(event)=>{
        console.log("On change");
        settext(event.target.value)
    }
    const[text,settext]=useState("Enter the text here");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black '}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white ',color:props.mode==='dark'?'white':'black '}} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    </>
  );
}
