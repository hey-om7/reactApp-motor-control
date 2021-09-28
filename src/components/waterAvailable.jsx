import React, { Component } from 'react';

class WaterAvailable extends React.Component {
    state = {
        imgUrl: "/images/dropOff.png"
    }
    constructor() {
        super()
        fetch('http://192.168.100.100:8000/getStats/water')
            .then(response => response.json())
            .then(data => {
                this.state.imgUrl = "/images/drop" + (data === 0 ? "Off" : "On") + ".png";
                this.setState({});
            });
    }
    render() {
        return <div>
            <img src={this.state.imgUrl} alt="" />
        </div>;
    }
}

export default WaterAvailable;