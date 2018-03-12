import React, {Component} from 'react'
import axios from 'axios'
export default class Song extends Component {
   constructor() {
      super()
      this.state = {
         data: []
      }
      this.addToFavorites = this.addToFavorites.bind(this)
   }

   
   addToFavorites(song, artist) {
      let data = {song: this.props.songProp.song, artist: this.props.songProp.artist}
      console.log('hit')
      axios.post('http://localhost:3001/api/song', data).then(r => {
         // this.setState({data: r.data})
         console.log(r)
      })
   }
   render() {
      return (
      <div>
         <span>song: {this.props.songProp.song}</span>
         <span> artist: {this.props.songProp.artist}</span>
         <span> album: {this.props.songProp.album}</span>
         <img src={ this.props.songProp.albumArt}/>
         <button onClick={ (e) => this.addToFavorites()}> Add to Favorites </button>
      </div>
      )
   }
}