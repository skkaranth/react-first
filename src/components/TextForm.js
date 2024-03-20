import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick=()=>{
        console.log("Uppercase is clicked")
        setText("U have clicekd uppercase");
    }
    const handleOnChange=(event)=>{
        console.log("OnChange is clicked")
        setText(event.target.value)
    }
    const   [text, setText] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">        
        <textarea className="form-control" value = {text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert To UpperCase</button>
    </div>
  )
}
