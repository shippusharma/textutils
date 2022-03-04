import React, { useState } from 'react'
// useState is a Hook 

export default function Textform(props) {

    const [text, setText] = useState(''); // hooks syntax

    const upperClick = () => {
        // console.log('UpperCase was Clicked '+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase ", "success");
    }

    const lowerClick = () => {
        // console.log('Lowercase was Clicked '+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase ", "success");
    }

    const clearClick = () => {
        setText('');
        props.showAlert("Box is Cleared ", "success");
    }

    const handleOnChange = (event) => {
        // console.log('on Change');
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space has been Removed ", "success");
    }


    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'dark'? "white" : "black"}}>
            <h1>Textutils - Word Counter,Character Counter,Lowercase to Uppercase,Uppercase to Lowercase,Remove ExtraSpace :</h1>
            <div className="mb-3 my-2" >
              <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode === 'dark'? "#13466e" : "white",color: props.mode === 'dark'? "white" : "black"}} onChange={handleOnChange} placeholder="Enter text here" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="bt btn-primary mx-2 my-2" onClick={upperClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="bt btn-danger mx-2 my-2" onClick={lowerClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="bt btn-warning mx-2 my-2" onClick={handleExtraSpace}>Remove ExtraSpaces</button>
            <button disabled={text.length===0} className="bt btn-secondary mx-2 my-2" onClick={clearClick}>Clear Text</button>
            <button disabled={text.length===0} className="bt btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        </div>
        <hr />
        <div className="container my-2" style={{color: props.mode === 'dark'? "white" : "black"}}>
            <h1>Word Counter</h1> <hr />
            <h5>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} WORDS and {text.length} CHARACTERS , You can Read in {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes</h5>
            <hr/>
            <h3>Preview : </h3>
            <p>{text.length>0 ? text:"Nothing to Preview.."}</p>
        </div>
    </>  
    )
}
