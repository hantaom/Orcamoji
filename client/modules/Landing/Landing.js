import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import EmojiDetail from "../EmojiDetail/EmojiDetail";
import EmojiDashBoard from "../EmojiDetail/EmojiDashBoard";
import EmojiChannel from "../EmojiDetail/EmojiChannel";
import styles from './Landing.css';
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

  render() {
    return (
      <div className="landingPage">
        <header>
            <h1>O R C A M O J I</h1>
        </header>
        <div className={styles['EmojiDashboard']}><EmojiDashBoard workspaces={this.props.workspaceEmotion}/></div>
        <div className={styles['EmojiChannel']}><EmojiChannel /></div>

      </div>
    );
  }
}



function mapStateToProps(state) {
    return {
      workspaceEmotion: state.landing
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchEmotions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
