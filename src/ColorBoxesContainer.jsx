import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxesContainer.css';
import getRandIdx from './utilities/getRandIdx';
import colors from './data/colors';

class ColorBoxesContainer extends Component {
  static defaultProps = {
    colors,
    numBoxes: 18,
  };
  constructor(props) {
    super(props);
    this.state = {
      shape: 'square',
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleShape = this.toggleShape.bind(this);
  }
  handleClick({ target }) {
    //when click, change color to another
    let randIdx = getRandIdx(colors);
    target.id =
      target.id === this.props.colors[randIdx]
        ? this.props.colors[randIdx + 1] || this.props.colors[randIdx - 1]
        : this.props.colors[randIdx];
  }
  toggleShape() {
    this.setState((curState) => {
      return curState.shape === 'square'
        ? { shape: 'circle' }
        : { shape: 'square' };
    });
  }
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
      return (
        <ColorBox
          curColor={this.props.colors[getRandIdx(this.props.colors)]}
          colors={colors}
          click={this.handleClick}
          shape={this.state.shape}
        />
      );
    });
    return (
      <>
        <h1>Welcome! Click A Box To Change It's Color!</h1>
        <div className="Color-boxes-container">{boxes}</div>
        <button onClick={this.toggleShape}>
          {this.state.shape === 'circle'
            ? 'Toggle To Squares'
            : 'Toggle To Circles'}
        </button>
      </>
    );
  }
}

export default ColorBoxesContainer;
