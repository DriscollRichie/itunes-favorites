import React, { Component } from 'react';
import Search from './Search'
import Song from './Song'
export default class Results extends Component {

   
   render() {
      let songInform = this.props.musicResults.map( elem => {
         return(<Song songProp={elem}/>)
      })
      return(
         <div>
            <span>Results</span>
            {songInform}
         </div>
      )
   }
}
