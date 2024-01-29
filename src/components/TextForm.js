import React, { useState } from "react";

export default function TextForm(props) {
  function countWords(str) {
    const arr = str.split(" ");

    return arr.filter((word) => word !== "").length;
  }
  //Function to UpperCase Text
  const handleUpClick = () => {
    //console.log("UpperCase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  //Function to LowerCase Text
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  //Function to Reverse Text
  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("String is Reversed", "success");
  };

  //Function to input Value to TextBox
  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  //Function to Copy the Text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("String is Copied", "success");
  };

  // Function to Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "light",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
            value={text}
            onChange={handleUpChange}
            spellCheck={true}
          ></textarea>
        </div>
        <div className="container">
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
            Reverse Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {countWords(text)} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes To Read Word</p>
      </div>
    </>
  );
}
