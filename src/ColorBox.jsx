import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        id={this.props.curColor}
        style={
          this.props.shape === 'square'
            ? { borderRadius: 0, border: '2px solid black' }
            : { borderRadius: 150, border: '2px solid black' }
        }
        onClick={this.props.click}
      ></div>
    );
  }
}

export default ColorBox;
