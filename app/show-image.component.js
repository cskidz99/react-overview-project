import React from 'react';

export default class ShowImage extends React.Component {
  render() {
		return (
			<div>
        {this.props.sprites
          ? <img src={this.props.sprites[this.props.params.image]} />
          : <span>Loading...</span>
        }
        {this.props.params.image}
			</div>

		)
	}
}
