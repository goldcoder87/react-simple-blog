import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div>
	      <button
	        onClick={browserHistory.goBack}
	        className="backButton"
	      >
	        <i className="fa fa-arrow-left" aria-hidden="true"></i>
	        <br/>
	        BACK
	      </button>
	    </div>
	  )
	}

export default BackButton;
