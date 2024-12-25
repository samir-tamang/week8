import React from 'react';
import './App.css';
import sad from './sad.png';  // Ensure images are in the correct path
import happy from './happy.png';

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
    this.mode = "happy";  // Default mode
  }

  Toggle_Mode() {
    this.setState((prevState) => {
      if (prevState.pic === sad) {
        this.mode = "happy";
        return { pic: happy };
      } else if (prevState.pic === happy) {
        this.mode = "sad";
        return { pic: sad };
      }
    });
  }

  render() {
    console.log("Rendering ToggleMode with mode: ", this.mode);
    return (
      <div>
        <h3>This is output of Task2: {this.mode}</h3>
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt="mode" />
        </button>
      </div>
    );
  }
}

export default ToggleMode;
