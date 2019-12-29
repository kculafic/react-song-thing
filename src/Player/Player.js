import React, { Component } from 'react';
import './Player.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


class Player extends Component {
    render() {
        return (
        <div className="player">
        	<div className="controls">
	            <a href='/#/'>
					<FontAwesomeIcon icon={faChevronLeft} />
				</a>
	            <a href='/#/'>
	                <FontAwesomeIcon icon={faPlay} />
	            </a>
	            <a href='/#/'>
	                <FontAwesomeIcon icon={faChevronRight} />
	            </a>
			</div>
			<div className="progress">
				<div className="bar">
					<div></div>
				</div>
			</div>

        </div>
      );
    }
}

export default Player;
