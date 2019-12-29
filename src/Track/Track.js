import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import GuitarChord from 'react-guitar-chord'

import './Track.css';


const Track = props => {
    console.log(props)

    const track_obj = props.tracks.map((track) =>
        <div className="track" key={track.id}>
            <div className="info">
                <h4>{track.title}</h4>
                <p>Written by: {track.writer} in {track.year}</p>
                <p>Status: {track.idea_status}</p>
                <p>Source: <a href={track.source} >Link</a> </p>

				<p>Key: {track.key} </p>
            </div>
			<div className="chordlist">
				{track.chords.map(x => {
					if(x.includes('min')) {
						console.log(x,'true bitch')
						let root_note = x.slice(0,1)
						return <GuitarChord
									chord={root_note}
									quality={'MIN'}
									height={'7em'}
									/>
					} else {
						return <GuitarChord
									chord={x}
									height={'7em'}
									/>
					}
				})}
			</div>
			<div className="insidebuttons">
				<ReactAudioPlayer
					src={track.source}
					controls
					width="200px"
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
