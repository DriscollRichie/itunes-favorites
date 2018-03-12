import React, {Component} from 'react'
import Song from './Song'
import axios from 'axios'
export default class MyFavs extends Component {
   constructor() {
      super()
      this.state = {
         favSong: {
            song: '',
            artist: ''
         }

      }
      this.addFav = this.addFav.bind(this)
   }
         
   addFav() {
      let promise = axios.post('/api/song', {song: this.state.favSong.song, artist: this.state.favSong.artist})
      promise.then( res => {
         this.setState({favSong})
      })
   }

   render() {
      return (
         <div>
            
         </div>
      )
   }
}


