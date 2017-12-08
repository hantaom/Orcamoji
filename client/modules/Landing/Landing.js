import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import EmojiDetail from "../EmojiDetail/EmojiDetail";
import EmojiDashBoard from "../EmojiDetail/EmojiDashBoard";
import EmojiChannel from "../EmojiDetail/EmojiChannel";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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
        <EmojiDashBoard workspaces={this.props.workspaceEmotion}/>
        <EmojiChannel />
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
