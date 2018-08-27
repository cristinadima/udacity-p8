import React, { Component } from 'react';
import ListItem from './ListItem';

class Filter extends Component {
	render() {
		return (
			<nav id="filter">
				<h2>Galati places</h2>
				Filter: <input
					tabIndex={3}
					role='searchbox'
					aria-label='search locations'
					type="text"
					placeholder="Search for locations"
					value={this.props.query}
					onChange={(event) => this.props.updateQuery(event.target.value)}
				/>
				<ul aria-label='locations list' className="list">
					{this.props.places.map(place =>
						<ListItem key={place.referralId}
							referralId={place.referralId}
							venue={place.venue.name}
							onListClick={this.props.onListClick}
						>
						</ListItem>
					)}
				</ul>
			</nav>
		)
	}
}

export default Filter