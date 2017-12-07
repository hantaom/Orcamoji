import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './App.css';

// Import Components

// Import Actions
import { toggleAddPost } from './LandingAction';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false
                  };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
    console.log(this);
  }

  sayHello() {
    this.props.toggleAddPost();
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={()=>{this.sayHello()}}>Click</button>
          <div className="Dennis">

          </div>
        </div>
      </div>
    );
  }
}


// glue to react and redux
function mapStateToProps(state) {
// Whatever is returned will show up as props inside BookList
    console.log("landing mapStateToProps is reached", state);
    return {
      currentEmotion : state.landing.currentEmotion,
      history : state.landing.history,
      predictive : state.landing.predictive
    };
}


// Anything returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all
    // of our reducers
    return bindActionCreators({toggleAddPost}, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
