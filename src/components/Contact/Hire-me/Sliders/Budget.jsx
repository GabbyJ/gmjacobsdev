import React, {Component} from "react";

class BudgetSlider extends Component{
    componentDidMount(){
        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }
    }

    render(){
        return(
            <div>
                <h2>What is your Budget?</h2>
                <div className="slideContainer">
                    <input type="range" min={100} max={5000} defaultValue={2000} className="slider" step={100} id="myRange" />
                    <div className="ticks-1">
                        <span className="tick">$100</span>
                        <span className="tick">$1000</span>
                        <span className="tick">$2000</span>
                        <span className="tick">$3000</span>
                        <span className="tick">$4000</span>
                        <span className="tick">$5000</span>
                    </div>
                    <h3 className="amount">$ <span id="demo"/></h3>
                </div>
          </div>
        );
    }
}

export default BudgetSlider;