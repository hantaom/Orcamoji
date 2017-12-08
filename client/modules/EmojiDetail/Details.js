import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from '../Post/components/PostListItem/PostListItem.css';

export class Details extends Component {
	constructor(props) {
    	super(props);
    	this.state = { isMounted: false,
                      summary_visible: false,
                      emotions: this.props.emotions};
  	}

  	componentDidMount() {
    	this.setState({isMounted: true}); // eslint-disable-line
  	}


  	test() {
  		console.log(this.state.emotions);
  	}


  	render () {
  		return (
  	      	<div className={styles['TESTRED']}>
  	      		FIOANUJNOFHUAONFOI
  	      		{this.test()}
  	      		{this.state.emotions} 	
      		</div>
  		);
  	}

}

export default Details;