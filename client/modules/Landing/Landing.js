import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './App.css';

// Import Components

// Import Actions
import { toggleAddPost } from './LandingAction';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  sayHello() {
    console.log("hello BONNNIEEEEE");
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <button onClick={this.sayHello()}>Click</button>
          <div className="Dennis">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  children: PropTypes.object.isRequired
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    
  };
}

export default connect(mapStateToProps)(Landing);
