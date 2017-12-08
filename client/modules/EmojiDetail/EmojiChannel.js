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
                <EmojiDetail emotions={histObjEmotion}
                    workspace={workspace}
                    channel={channel}
                />
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
                <EmojiDetail emotions={predObjEmotion}
                    workspace={workspace}
                    channel={channel}
                />
            )
        });
        return renderLists;
    }

   renderSummary() {
        if (!this.props.channel.emotions) {
            return (
                <div>
                    Nothing is selected
                </div>
            )
        }
        return (
            <div>
                <EmojiDetail emotions={this.props.channel.emotions && this.props.channel.emotions.currentEmotion}
                    workspace={this.props.channel.workspace}
                    channel={this.props.channel.channelName}
                />
                <div className="history">
                    {this.renderHistory()}
                </div>
                <div className="predictive">
                    {this.renderPredictive()}
                </div>
            </div>
        )
    }

  	render () {
  		return (
  	      <div className={styles['mainEmoji']}> 
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





