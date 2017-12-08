import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiDetail from './EmojiDetail';
import { bindActionCreators } from 'redux';
import { selectChannel } from './EmojiActions';
import styles from './EmojiDashBoard.css';


class EmojiDashBoard extends Component{
    constructor(props) {
        super(props);
    }
    renderMainEmojiForEachChannel() {
        let workspaces = this.props.workspaces;
        let channelEmojis = [];
        Object.keys(workspaces).forEach((workspaceEmotion)=> {
          let workspace = workspaces[workspaceEmotion];
          Object.keys(workspace).forEach((workspaceName) => {
            let channels = workspace[workspaceName];
            channels.forEach((channel) => {
              Object.keys(channel).forEach((channelName) => {
                let emotions = channel[channelName];
                channelEmojis.push(
                <div key= {channelName} 
                onClick={()=> this.props.selectChannel(emotions, workspaceName, channelName)}
                className={styles["single-post"]}
                >
                  <EmojiDetail emotions={emotions.currentEmotion}
                    className={styles["dashEmoji"]}
                  />
                  <p className={styles["channelLabel"]}>{workspaceName}</p>
                  <h3 className={styles["channelLabel"]}>{channelName}</h3>
                </div>
                )
              });
            })
          });
        });
        return channelEmojis;
    }
// 

    render() {
        return(
            <div className="channelGroup">
                {this.renderMainEmojiForEachChannel()}
            </div>
        )
        
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectChannel: selectChannel}, dispatch);
}

export default connect(null, mapDispatchToProps)(EmojiDashBoard);








