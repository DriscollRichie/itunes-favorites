import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import axios from 'axios'
import Results from './components/Results'

class App extends Component {
   constructor() {
      super()
      this.state = {
         songInfo: []
      }
      this.updateUserInput = this.updateUserInput.bind(this)
      this.searchTunes = this.searchTunes.bind(this)
   }


   updateUserInput(e) {
      this.setState({userInput: e.target.value})
   }
   searchTunes( term ) {
      axios.get('https://itunes.apple.com/search?term=' + term + '&limit=25')
         .then( r => { 
            console.log(r)
            let songInform = r.data.results.map( elem => {
               return {
                  song: elem.trackName,
                  artist: elem.artistName,
                  album: elem.collectionName,
                  albumArt: elem.artworkUrl100
               }
            })
            this.setState({songInfo: songInform})
         }) 
   }

   

   render() {
      return (
         <div className="App">
            <Search searchTunes={this.searchTunes}/>
            <Results musicResults={this.state.songInfo}/>
            {/* <MyFavs myFavs={}/> */}
         </div>
      );
   }
}

export default App;