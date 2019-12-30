import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player';
import Track from './Track/Track';

class App extends Component {
    state = {
        tracks: [
            { id: 1, title: 'Tamo Daleko (Surf Version)', writer: 'Krsto', year: 1918, idea_status: 'Loop / Riff', source: 'https://od.lk/s/MTBfOTMwNDc5NDRf/Tamo%20Daleko%20-%20%28serb%20surf%29.mp3', chords: ['A', 'C', 'D'], key: 'A Major' } ,
            { id: 2, title: 'Anthem of Yugoslavia', writer: 'Samuel Tomášik', year: 1834, idea_status: 'National Anthem', source: 'https://www.marxists.org/subject/yugoslavia/music/servie-serbian.mp3', chords: ['B', 'E', 'A', 'D'], key: 'B Major' } ,
            { id: 3, title: 'Airport Mesa', writer: 'Krsto and Joel', year: 2014, idea_status: 'Loop / Riff', source: 'https://od.lk/s/MTBfOTMwNDY2NjNf/airport%20mesa%20%232.mp3', chords: ['Dmin'], key: 'Drop D minor' } ,
            { id: 4, title: 'Pink Champagne / High Life', writer: 'Krsto', year: 2018, idea_status: 'Loop / Riff from Mixtape', source: 'https://od.lk/s/MTBfOTMwNDkxODFf/Pink%20Champagne%20hig%20Life.m4a', chords: ['A#', 'C#', 'D#', 'Gmin'], key: 'C# Major' } ,
            // { id: 5, title: 'Shirt', writer: 'Krsto', year: 2015, idea_status: 'Loop / Riff', source: 'www.link.com/981273kjhd'   } ,
            // { id: 6, title: 'Jacket', writer: 'Krsto', year: 2015, idea_status: 'Loop / Riff', source: 'www.link.com/981273kjhd'   } ,
            // { id: 7, title: 'Hat', writer: 'Krsto', year: 2015, idea_status: 'Loop / Riff', source: 'www.link.com/981273kjhd'   } ,
            // { id: 8, title: 'Need Time', writer: 'Stefi', year: 2015, idea_status: 'Loop / Riff', source: 'https://soundcloud.com/krsto87/need-time'   } ,
        ]
    }

    render() {
        return (
        <div className="App">
            <div className="title">
                <h1>songThing (React.js)</h1>
            </div>
            <Player />

            <Track tracks={this.state.tracks}/>

        </div>
      );
    }
}

export default App;
