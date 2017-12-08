import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EmojiDetail from "../EmojiDetail/EmojiDetail"
import EmojiDashBoard from "../EmojiDetail/EmojiDashBoard"
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
      <div>
        <div>
          <div className="landingPage">

            <header>
                <h1>O R C A M O J I</h1>
            </header>

            <EmojiDashBoard workspaces={this.props.workspaceEmotion}/>

            <footer>
                <p>Team Orcamoji &copy;</p>
            </footer>

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
