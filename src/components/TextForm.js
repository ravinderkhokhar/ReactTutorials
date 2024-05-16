import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared","success");
    }
    const handleUpChange=(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState("");
  
  return (
    <>
    <div className="container">
        <div className="mb-3">
            <h1 className={`text-${props.txtMode}`}>{props.heading}</h1>
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            {/* <textarea className="form-control" style={{backgroundColor:props.txtMode==='light'?'grey':'white',color:props.txtMode==='light'?'white':'black'}} onChange={handleUpChange} value={text} id="myBox" rows="8" ></textarea>             */}
            <textarea className="form-control" style={{backgroundColor:props.txtMode,color:props.mode}} onChange={handleUpChange} value={text} id="myBox" rows="8" ></textarea>
        </div>
        <button id="uperBtn" className="btn mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button id="lowerBtn" className="btn mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button id="clearBtn" className="btn mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1 className={`text-${props.txtMode}`}>Your Text Summary</h1>
        <p className={`text-${props.txtMode}`}>{text.split(' ').filter(function(n) { return n != '' }).length} text and {text.length} Character</p>
        <p className={`text-${props.txtMode}`}>{0.008 * text.split(" ").length} mins. read text and {text.length} Character</p>
        <h2 className={`text-${props.txtMode}`}>Preview</h2>
        <p className={`text-${props.txtMode}`}>{text.length>0?text:"Enter Something to Preview it here"}</p>
    </div>
    </>
  )
}

