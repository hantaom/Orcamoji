import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import angry from "../../../assets/my-icons-collection/svg/angry.svg";
import surprise from "../../../assets/my-icons-collection/svg/surprise.svg";
import fear from "../../../assets/my-icons-collection/svg/fear.svg";
import sadness from "../../../assets/my-icons-collection/svg/sadness.svg";
import joy from "../../../assets/my-icons-collection/svg/joy.svg";

import styles from './EmojiChannel.css';

var SampleEmotion = {
    "angry": 0.2,
    "surprise": 0.1,
    "fear": 0.4,
    "sadness": 0.1,
    "joy": 0.2
}

export class EmojiChannel extends Component {
	constructor(props) {
    	super(props);
    	this.state = { isMounted: false};
  	}

  	componentDidMount() {
    	this.setState({isMounted: true}); // eslint-disable-line
    }
    
    getWorkspaceName() {
        return "TestWorkspace"
    }

    getChannelName() {
        return "TestChannel"
    }

    getMainEmotionPercentage() {
        return 0.4
    }

    getOtherEmotionPercentages() {
        return [0.2,0.3,0.05,0.05]
    }

    // Gets image for the main emotion from a list of current emotions
    getHistory() {
        let s1 = {
            "angry": 0.2,
            "surprise": 0.1,
            "fear": 0.4,
            "sadness": 0.1,
            "joy": 0.2
        }
        let s2 = {
            "angry": 0.4,
            "surprise": 0.1,
            "fear": 0.2,
            "sadness": 0.1,
            "joy": 0.2
        }
        let s3 = {
            "angry": 0.2,
            "surprise": 0.1,
            "fear": 0.2,
            "sadness": 0.1,
            "joy": 0.4
        }
        let history = [s1,s2,s3]
        let mainHistory = []

        history.forEach(function(entry) {
            mainHistory.concat(this.getMainEmotion(entry))
        });
        return mainHistory
    }

    getPredictive() {
        let s1 = {
            "angry": 0.2,
            "surprise": 0.1,
            "fear": 0.4,
            "sadness": 0.1,
            "joy": 0.2
        }
        let s2 = {
            "angry": 0.4,
            "surprise": 0.1,
            "fear": 0.2,
            "sadness": 0.1,
            "joy": 0.2
        }
        let s3 = {
            "angry": 0.2,
            "surprise": 0.1,
            "fear": 0.2,
            "sadness": 0.1,
            "joy": 0.4
        }
        let prediction = [s1,s2,s3]
        let mainPrediction = []

        prediction.forEach(function(entry) {
            mainPrediction.concat(this.getMainEmotion(entry))
        });
        return mainPrediction
    }

  	getMainEmotion(emotionObject) { 
    //  let currentEmotions = this.props.current;
    //  let mainEmotion;
    //  let emotionLevel = 0;
    //  Object.keys(currentEmotions).forEach((emotion) => {
    //   if (currentEmotions[emotion] > emotionLevel) {
    //     mainEmotion = emotion;
    //     emotionLevel = currentEmotions[emotion];
    //   }
    //  });
        let currentEmotions = emotionObject
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
          <div>
            <div className={styles['channelName']}>
                <h1>Channel Name</h1>
                <div className={styles['otherEmotions']}>
                    <h1>Angry: 5%</h1>
                    <h1>Surprise: 20%</h1>
                    <h1>Sadness: 20%</h1>
                    <h1>joy: 10%</h1>
                </div>
            </div>
  	        <div className={styles['mainEmoji']}> 
                {this.getMainEmotion(SampleEmotion)} 	        
      	    </div>
          </div>
  		);
  	}

}

export default EmojiChannel;
