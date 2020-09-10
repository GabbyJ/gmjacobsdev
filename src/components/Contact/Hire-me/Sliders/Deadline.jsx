import React, {Component} from "react";

class DeadlineSlider extends Component{
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
                <h2>What is your Deadline?</h2>
                <div className="slideContainer">
                    <input type="range" min={0} max={5} defaultValue={2} className="slider" step={1} id="myRange" />
                    <div className="ticks-2">
                        <div className="tick"><p>2 weeks</p></div>
                        <span className="tick"><p>1 month</p></span>
                        <span className="tick"><p>2 months</p></span>
                        <span className="tick"><p>3 months</p></span>
                        <span className="tick"><p>4 months</p></span>
                        <span className="tick"><p>5+ months</p></span>
                    </div>
                </div>
          </div>
        );
    }
}

export default DeadlineSlider;