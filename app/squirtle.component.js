import React from 'react';
import { getPokeImage } from './poke.resource.js';

export default class Squirtle extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentWillMount() {
    getPokeImage('squirtle').then(data => {
      this.setState({
        imgUrl: data.data.sprites.front_default,
        sprites: data.data.sprites,
      })
    })
  }
  render() {
		return (
			<div>
				{this.state.imgUrl ? <img src={this.state.imgUrl}/> : <span>Loading...</span>}
        <h2>Squirtle</h2>
        <div>---------</div>
        {React.cloneElement(this.props.children, {...this.props, sprites: this.state.sprites})}
			</div>

		)
	}
}
