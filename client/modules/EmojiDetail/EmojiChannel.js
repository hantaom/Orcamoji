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
    
   

    //     history.forEach(function(entry) {
    //         mainHistory.concat(this.getMainEmotion(entry))
    //     });
    //     return mainHistory
    // }

   renderSummary() {
        if (!this.props.channel.emotions) {
            return (
                <div>
                    Nothing is selected
                </div>
            )
        }
        console.log("lol");
        return (
            <div>
                <EmojiDetail emotions={this.props.channel.emotions && this.props.channel.emotions.currentEmotion}
                    workspace={this.props.channel.workspace}
                    channel={this.props.channel.channelName}
                />
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
    console.log("hit",state);
    let currentEmotions = state.emoji.emotions && state.emoji.emotions.currentEmotions;
    return {
        channel:state.emoji
    };
}

export default connect(mapStateToProps)(EmojiChannel);





