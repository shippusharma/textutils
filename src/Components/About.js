import React from 'react';

export default function About(props) {

    const myStyle ={
             color : props.mode === "dark" ? "white" : "#042743",
             backgroundColor:props.mode === "dark" ? "rgb(36 74 104)" :'white',
         };


    return (
        <div className="container" >
            <h1 className="my-3"style={{color:props.mode === "dark" ? "white" : "#042743"}}>About us</h1>
            <div className="accordion" id="accordionExample"  >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <b>Analyze Your Text</b> 
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body"  >
                            Textutils Gives you to a Way to analize your Text Quickly and Efficiently. be it Word Count or Character and Preview, etc. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <b>Free to Use</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body"  >
                        Textutils is a Free Counter tool that provides instant Character Count & Word Count Statistics for a given text. Textutils reports the Number of words and Character. thus it suitable for Writing text with Word / Character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <b>Browser Compatible</b>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body"  >
                        this word Counter Software Works in Any browsers such as Chrome, Firefox, Internet Explore, Safari, Opera. it Suits to Count Character in facebook, Blog, Books, Excel Document, pdf document, Essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
