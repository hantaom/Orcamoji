import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components

// Import Actions

// Import Selectors
import { LandingReducer } from '../LandingReducer';


class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <h1>yo</h1>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.


// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: LandingReducer(state)
  };
}

export default connect(mapStateToProps)(LandingPage);
