"use client"
import { useState } from "react";

export default function Home() {


  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");

  function getCount(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    const input = document.getElementById("input") as HTMLTextAreaElement;
    var value = event.target.value;
    setText(value);
    const cleanedText = value.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').trim();
    const wordList = cleanedText
      .split(/\s+/)
      .filter(word => isNaN(Number(word)));
    const words = wordList.length;
    
    setWordCount(words);
  }

  function erase(event: React.MouseEvent<HTMLButtonElement>){
    setText("");
    setWordCount(0);
    
  }

  return (
    <div className="centered">
      <div className="counter">
      <h3>Word Counter</h3>
      <p>Enter some text into the box and get a word count</p>
      <textarea className="textbox" id="input" value={text} onChange={getCount} placeholder="Enter text here..."></textarea>
      <br></br>      
      <button onClick={erase}>Clear Text</button>
      <p>Your word count is: {wordCount}</p>
      </div>
    </div>
  );
}
