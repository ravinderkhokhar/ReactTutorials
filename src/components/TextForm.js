import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText)
    }
    const handleUpChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter your text");
  return (
    <>
    <div className="container">
        <div className="mb-3">
            <h1>{props.heading}</h1>
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" onChange={handleUpChange} value={text} id="myBox" rows="8" ></textarea>            
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} text and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} mins. read text and {text.length} Character</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

