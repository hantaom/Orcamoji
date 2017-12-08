import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import angryFace from "../../../assets/my-icons-collection/svg/010-angry.svg";
import happyFace from "../../../assets/my-icons-collection/svg/007-happy-2.svg";
import sadFace from "../../../assets/my-icons-collection/svg/005-sad.svg";
import styles from '../Post/components/PostListItem/PostListItem.css';

export class EmojiDetail extends Component {
	constructor(props) {
    	super(props);
    	this.state = { isMounted: false
                  };
  	}

  	componentDidMount() {
    	this.setState({isMounted: true}); // eslint-disable-line
    	console.log(this);
  	}

  	// Gets image for the main emotion from a list of current emotions
  	getMainEmotion() { 
    	var mainEmo = 0;
    	var mainEmoString = -1;

    for (var i = 0; i<props.current.length; i++) {
        if (parseInt(props.current[i]) > mainEmo) {
            mainEmo = props.current[i];
            mainEmoString = Object.keys(props.current[i]);
        }
    }

    switch (mainEmo) {
    	case angry: 
    		return <img src={angry} alt="angry">
    	case surprise:
    		return <img src={surprise} alt="surprise">
    	case fear:
    		return <img src={fear} alt="fear">
    	case sadness:
    		return <img src={sadness} alt="sadness">
    	case joy:
    		return <img src={joy} alt="joy">
    	default:
    		return <img src={joy} alt="joy">
    }
    return 0;
  }

  	render () {
  		return (
  	        <div className={styles['single-post']}>  	        
      			getMainEmotion();
      		</div>
  		);
  	}

}

export default connect(EmojiDetail);
