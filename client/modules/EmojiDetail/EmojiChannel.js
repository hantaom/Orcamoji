import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiDetail from './EmojiDetail';
import styles from './EmojiChannel.css';

class EmojiChannel extends Component {
	constructor(props) {
    	super(props);
    	this.state = { isMounted: false};
  	}

  	componentDidMount() {
    	this.setState({isMounted: true}); // eslint-disable-line
    }
    
    renderHistory() {
        let history = this.props.channel.emotions.history;
        let workspace = this.props.channel.workspace;
        let channel = this.props.channel.channelName;
        let renderLists = [];

        history.forEach((histObjEmotion)=> {
            renderLists.push(
                <div>
                    <EmojiDetail emotions={histObjEmotion}
                        workspace={workspace}
                        channel={channel}
                        className={styles["side-emoji"]}
                    />
                </div>
            )
        });
        return renderLists;
    }

    renderPredictive() {
        let predictive = this.props.channel.emotions.predictive;
        let workspace = this.props.channel.workspace;
        let channel = this.props.channel.channelName;
        let renderLists = [];

        predictive.forEach((predObjEmotion)=> {
            renderLists.push(
                <div>
                    <EmojiDetail emotions={predObjEmotion}
                        workspace={workspace}
                        channel={channel}
                        className={styles["side-emoji"]}
                    />
                </div>
            )
        });
        return renderLists;
    }

    getCurrentData(emotions) {
        if (!emotions || !emotions.currentEmotion) {
            return (
                <div>No Data available</div>
            )
        }
        let currentEmotion = emotions.currentEmotion;
        let emotionsKeys = Object.keys(currentEmotion);

        let a = emotionsKeys.map((key) => {
            let roughValue = currentEmotion[key];
            roughValue *= 100;
            let value = roughValue.toFixed(2);
            return(
                <h5 className={styles["otherEmotionsText"]}>{key} : {value}%</h5>
            )
        });
        return a;
        
    }
// <h5>{this.getAngryFromHistory(this.props.channel.emotions)}</h5>
                            // <h5>Sad: 10%</h5>
                            // <h5>Sad: 10%</h5>
                            // <h5>Sad: 10%</h5>
                            // <h5>Sad: 10%</h5>
   renderSummary() {
        if (!this.props.channel.emotions) {
            return (
                <div>
                    <h1 className={styles["emptyText"]}>Please Select a Channel Before Analysis</h1>
                </div>
            )
        }
        return (
            <div>
                <div className="currentEmotionWrapper">
                    <div>
                        <h2 className={styles['channelTitle']}>{this.props.channel.channelName}</h2>
                        <div className={styles['otherEmotions'] + ' .col-sm-8' }>
                            {this.getCurrentData(this.props.channel.emotions)}
                        </div>
                    </div>
                    <div className = {styles["historyAndPredictive"]}>
                        <div className={styles['history']}>
                            <h5>History</h5>
                            {this.renderHistory()}
                        </div>
                        <div className = {styles["space"]}></div>
                        <div className={styles['predictive']}>
                            <h5>Predictive</h5>
                            {this.renderPredictive()}
                        </div>
                    </div>
                    <div className={styles['mainEmoji']}>
                        <EmojiDetail emotions={this.props.channel.emotions && this.props.channel.emotions.currentEmotion}
                            workspace={this.props.channel.workspace}
                            channel={this.props.channel.channelName}
                        />
                    </div>
                </div>
            </div>
        )
    }

  	render () {
  		return (
  	      <div> 
            {this.renderSummary()}
      	  </div>
  		);
    }
}



function mapStateToProps(state) {
    let currentEmotions = state.emoji.emotions && state.emoji.emotions.currentEmotions;
    return {
        channel:state.emoji
    };
}

export default connect(mapStateToProps)(EmojiChannel);





