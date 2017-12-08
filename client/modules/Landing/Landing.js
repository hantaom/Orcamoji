import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EmojiDetail from "../EmojiDetail/EmojiDetail"
// Import Style
// import styles from './App.css';

// Import Components

// Import Actions
import { fetchEmotions } from './LandingAction';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    this.props.fetchEmotions();
  }

  renderChannelEmoji() {
    let workspaces = this.props.workspaceEmotion;
    let channelEmojis = [];
    Object.keys(workspaces).forEach((wsName)=> {
      let workspace = workspaces[wsName];
      Object.keys(workspace).forEach((wsName2) => {
        let channels = workspace[wsName2];
        channels.forEach((channel) => {
          Object.keys(channel).forEach((channelName) => {
            let emotions = channel[channelName]
            channelEmojis.push(
              <EmojiDetail current={emotions.currentEmotion} />
            )
          });
        })
      });
    });
    return channelEmojis;
  }



  render() {
    return (
      <div>
        <div>
          <div className="landingPage">
          <button onClick={()=> {this.renderChannelEmoji()}}>clickme</button>
            {this.renderChannelEmoji()}
          </div>
        </div>
      </div>
    );
  }
}


// glue to react and redux
function mapStateToProps(state) {
// Whatever is returned will show up as props inside BookList
    return {
      workspaceEmotion: state.landing
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchEmotions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
