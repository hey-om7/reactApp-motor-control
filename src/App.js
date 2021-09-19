import logo from './logo.svg';
import './App.css';
// import TheButton from './buttonOn'
import React, { Component, useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);
  let btnStatus = true;
  useEffect(() => {
    document.title = count == 1 ? `Motor Status is On` : `Motor Status is Off`;
  });
  function buttonClkFunction() {
    if (count == 0) {
      fetch('http://192.168.100.100:8000/setPump/1')
        .then(response => response.json())
        .then(data => {
          if (data == "Done") {
            setCount(1)
          }

        })


    } else {
      fetch('http://192.168.100.100:8000/setPump/0')
        .then(response => response.json())
        .then(data => {
          if (data == "Done") {
            setCount(0)
          }
        })
    }
  }

  fetch('http://192.168.100.100:8000/getStats/pump')
    .then(response => response.json())
    .then(data => {
      setCount(data)
    })

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <style>{'body { background-color: black; }'}</style>
      <img style={{
        marginTop: window.innerHeight > window.innerWidth ? window.innerHeight * 0.3 : window.innerHeight * 0.2, maxHeight: window.innerHeight > window.innerWidth ? window.innerHeight * 0.35 : window.innerHeight * 0.5
      }} onClick={() => buttonClkFunction()} src={count == 1 ? "/images/powerOn.png" : "/images/powerOff.png"} alt="Image Load Error" />
    </div>

  );

}

export default App;
