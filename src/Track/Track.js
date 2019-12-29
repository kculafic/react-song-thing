import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './Track.css';


const Track = props => {
	console.log(props)

	const track_obj = props.tracks.map((track) =>
		<div className="track" key={track.id}>
			<div className="info">
				<h4>{track.id}: {track.title}</h4>
				<p>Written by: {track.writer}</p>
				<p>Status: {track.idea_status}</p>
				<p>Source: <a href={track.source} >Link</a> </p>

			</div>
			<div className="insidebuttons">
				<ReactAudioPlayer
					src={track.source}
					controls
					width="500px"
				/>
			</div>

		</div>
	);


	return (
			<div className="tracklist">
				{track_obj}
			</div>

	);

}


export default Track;
