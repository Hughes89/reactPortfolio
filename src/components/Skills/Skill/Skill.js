import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';

import './Skill.css';

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var progress = new ProgressBar.Line('#' + this.props.skill.id, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 2500,
      color: this.props.skill.color,
      trailColor: '#8e8e8e',
      trailWidth: 1,
    });
    progress.animate(this.props.skill.percentage * 0.01);
  }

  render() {
    const styles = {
      width: '30%',
      display: 'inline-block',
      paddingRight: '20px'
    }
    return (
      <div className={this.props.skill.id} style={styles}>
      <p>{this.props.skill.name}</p>
      <div className="progress-bar" id={`${this.props.skill.id}`}></div>
      </div>
    )
  }
}

export default Skill;