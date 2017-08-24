// React官网的变量提升练习
import React, { Component } from 'react';
import './Calculator.css';


function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>大于100度，水会烧开</p>
    }else {
        return <p>小于100度，水不会烧开</p>
    }
}


const scaleName = {
    c: '摄氏温度',
    f: '华氏温度'
};
function toCelsious(f){
    return (f - 32) * 5 / 9;
}
function toFahrenheit(c){
    return (c * 9 / 5) + 32;
}
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入一个{scaleName[scale]}</legend>
                <input type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }

}


class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: '0',
            scale: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }


    handleCelsiusChange(temperature){
        this.setState({
            scale: 'c',
            temperature: temperature
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale: 'f',
            temperature: temperature
        })
    }


    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const ctemperature = scale === 'f' ? tryConvert(temperature, toCelsious) : temperature;
        const ftemperature = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


        return (
            <div>
                <TemperatureInput temperature={ctemperature} scale="c" onTemperatureChange={this.handleCelsiusChange} />
                <BoilingVerdict celsius={parseFloat(ctemperature)}/>
                <TemperatureInput temperature={ftemperature} scale="f" onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}

export default Calculator;