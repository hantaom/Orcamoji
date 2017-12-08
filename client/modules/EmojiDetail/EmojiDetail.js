import React, { Component } from 'react';
import { connect } from 'react-redux';

import angry from "../../../assets/my-icons-collection/svg/angry.svg";
import surprise from "../../../assets/my-icons-collection/svg/surprise.svg";
import fear from "../../../assets/my-icons-collection/svg/fear.svg";
import sadness from "../../../assets/my-icons-collection/svg/sadness.svg";
import joy from "../../../assets/my-icons-collection/svg/joy.svg";

// import styles from '../Post/components/PostListItem/PostListItem.css';

export class EmojiDetail extends Component {
	constructor(props) {
    	super(props);
    	this.state = { isMounted: false};
  	}

  	componentDidMount() {
    	this.setState({isMounted: true}); // eslint-disable-line
  	}

  	// Gets image for the main emotion from a list of current emotions
  	getMainEmotion() { 

     let currentEmotions = this.props.emotions;
     let mainEmotion;
     let emotionLevel = 0;
     Object.keys(currentEmotions).forEach((emotion) => {
      if (currentEmotions[emotion] > emotionLevel) {
        mainEmotion = emotion;
        emotionLevel = currentEmotions[emotion];
      }
     });
      switch (mainEmotion) {
      	case "angry": 
      		return(<img src={angry} alt="angry"/>);
      	case "surprise":
      		return(<img src={surprise} alt="surprise"/>);
      	case "fear":
      		return(<img src={fear} alt="fear"/>);
      	case "sadness":
      		return(<img src={sadness} alt="sadness"/>);
      	case "joy":
      		return(<img src={joy} alt="joy"/>);
      	default:
      		return(<img src={joy} alt="joy"/>);
      }
    }

  	render () {
  		return (
  	      <div > 
            {this.getMainEmotion()}
      		</div>
  		);
  	}

}

export default EmojiDetail;
