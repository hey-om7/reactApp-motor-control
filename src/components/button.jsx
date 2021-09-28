import React, { Component } from 'react';
import { BoxesLoader } from "react-awesome-loaders";
let webUrl = "https://script.google.com/macros/s/AKfycbzPF4Bc2p7t9H_OL22HSQdtAvUDCQCp4w0VAaTdhPzs8SJRrYGKs2v2jwrqQ4HUtOtS/exec?status=";
let currentBtnState = false;
let loading = true;
class MyBtn extends React.Component {
    state = {
        imgUrl: "/reactApp-motor-control/images/powerOff.png"
    }
    constructor() {
        super()
        fetch(webUrl + "-1")
            .then(response => response.json())
            .then(data => {
                this.state.imgUrl = "/reactApp-motor-control/images/power" + (data.status.toString() === "0" ? "Off" : "On") + ".png";
                loading = false;
                this.setState({});
                currentBtnState = data.status.toString() === "0" ? false : true;
            });
    }
    btnClicked() {
        console.log("clicked")
        loading = true;
        this.setState({});
        fetch(webUrl + (currentBtnState ? "0" : "1"))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status.toString() === "SUCCESS") {
                    console.log("hope");
                    this.state.imgUrl = "/reactApp-motor-control/images/power" + (currentBtnState ? "Off" : "On") + ".png";
                    currentBtnState = !currentBtnState;
                    console.log(currentBtnState);
                }
                loading = false;
                this.setState({});
            })
    }
    render() {
        if (loading) {
            return (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: window.innerHeight > window.innerWidth ? window.innerHeight * 0.45 : window.innerHeight * 0.3, maxHeight: window.innerHeight > window.innerWidth ? window.innerHeight * 0.35 : window.innerHeight * 0.5
                }}>
                    <BoxesLoader
                        boxColor={"#6366F1"}
                        // style={{ marginBottom: "20px" }}
                        shadowColor={"#000000"}
                        desktopSize={"128px"}
                        mobileSize={"80px"}
                    />
                </div>
            );
        } else {
            return <div>
                <img style={{
                    marginTop: window.innerHeight > window.innerWidth ? window.innerHeight * 0.3 : window.innerHeight * 0.2, maxHeight: window.innerHeight > window.innerWidth ? window.innerHeight * 0.35 : window.innerHeight * 0.5
                }} onClick={() => { this.btnClicked() }} className={this.loadStuff} src={this.state.imgUrl} alt="alla" />

            </div>;
        }
    }
}

export default MyBtn;

