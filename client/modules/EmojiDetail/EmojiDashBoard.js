import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmojiDetail from './EmojiDetail';
import { bindActionCreators } from 'redux';
import { selectChannel } from './EmojiActions';


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
                <div key= {channelName} onClick={()=> this.props.selectChannel(emotions, workspaceName, channelName)}>
                  <EmojiDetail emotions={emotions.currentEmotion}
                    workspace={workspaceName}
                    channel={channelName}
                  />
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








