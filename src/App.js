// import React, { Component } from 'react';
import MyBtn from "./components/button";
import WaterAvailable from "./components/waterAvailable";
import './myApp.css';

function App() {
  return (
    <div className="wholeApp" >
      <MyBtn ></MyBtn>
      {/* <WaterAvailable className="footer"></WaterAvailable> */}
    </div >
  );
}

export default App;


// style={{
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center"
// }}