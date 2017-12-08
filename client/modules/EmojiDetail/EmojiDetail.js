import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import angry from "../../../assets/my-icons-collection/svg/angry.svg";
import surprise from "../../../assets/my-icons-collection/svg/surprise.svg";
import fear from "../../../assets/my-icons-collection/svg/fear.svg";
import sadness from "../../../assets/my-icons-collection/svg/sadness.svg";
import joy from "../../../assets/my-icons-collection/svg/joy.svg";

import styles from '../Post/components/PostListItem/PostListItem.css';

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
    	// var mainEmo = 0;
    	// var mainEmoString = -1;
     //  let channels = 
     //  let mainEmotionImage;
     //  for (var i = 0; i<this.props.current.length; i++) {
     //      if (parseInt(this.props.current[i]) > mainEmo) {
     //          mainEmo = this.props.current[i];
     //          mainEmoString = Object.keys(this.props.current[i]);
     //      }
     //  }

     let currentEmotions = this.props.current;
     let mainEmotion;
     let emotionLevel = 0;
     Object.keys(currentEmotions).forEach((emotion) => {
      if (currentEmotions[emotion] > emotionLevel) {
        mainEmotion = emotion;
        emotionLevel = currentEmotions[emotion];
      }
     });
     console.log(mainEmotion);
     console.log(emotionLevel);
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
  	      <div className={styles['single-post']}> 
          {this.getMainEmotion()}
          ajdfkljsadfl;asdjfl;asjfl;sajafkl;dsjflk;sadjflk;asjlk;saj 	        
      		</div>
  		);
  	}

}

export default EmojiDetail;
