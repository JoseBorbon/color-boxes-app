import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  static defaultProps = {
    shape: 'square',
  };
  render() {
    return (
      <div
        id={this.props.color}
        style={this.props.shape === 'square' ? null : { borderRadius: 150 }}
      ></div>
    );
  }
}

export default ColorBox;
