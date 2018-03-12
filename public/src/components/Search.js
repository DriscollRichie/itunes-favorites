import React, {Component} from 'react';
export default class Search extends Component {
   constructor() {
      super()

      this.state = {
         userInput: ''
      }

      this.updateUserInput = this.updateUserInput.bind(this)
   }

   updateUserInput(e) {
      this.setState({userInput: e.target.value})
   }

   render() {
      return(
         <div>
            <input onChange={this.updateUserInput} value={this.state.userInput}/>
            <button onClick={() => this.props.searchTunes( this.state.userInput ) }>Search</button>
         </div>

      )
   }
}
