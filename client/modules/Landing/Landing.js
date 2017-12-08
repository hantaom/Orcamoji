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
  }

  sayHello() {
    this.props.fetchEmotions();
    console.log("after",this);
  }



  render() {
    return (
      <div>
        <div>          
          <div className="landingPage">
            <EmojiDetail channelData={ this.props }/>
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
