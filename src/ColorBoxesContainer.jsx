import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxesContainer.css';
import getRandIdx from './utilities/getRandIdx';
import colors from './data/colors';

class ColorBoxesContainer extends Component {
  static defaultProps = {
    colors,
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="Color-boxes-container">
        <ColorBox
          color={this.props.colors[getRandIdx(this.props.colors)]}
          shape="circle"
        />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
        <ColorBox color={this.props.colors[getRandIdx(this.props.colors)]} />
      </div>
    );
  }
}

export default ColorBoxesContainer;
