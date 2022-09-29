import s from './List.module.css'
import React from 'react'
import ListItem from "./ListItem";
import axios from "axios";

class List extends React.Component {
	constructor( props ) {
		super( props );
		if ( this.props.ListItem.length === 0 ) {
			axios.get( "http://127.0.0.1:1880/users" ).then( response => {
				this.props.SetUsers( response.data.item )
			} )
		}
	}
	
	render() {
		let Lists = this.props.ListItem.map( e => <ListItem unfollow={this.props.UnFollowF} follow={this.props.FollowF}
		                                                    key={e.id}
		                                                    id={e.id} name={e.name} followed={e.followed}
		                                                    status={e.status}
		                                                    country={e.locations.country} city={e.locations.city}
		                                                    sex={e.sex} photoUrl={e.photoUrl}/> )
		return ( <div className={s.container}>
			<div className={`${s.list} ${s.list_row}`}>
				{Lists}
			</div>
		</div> )
	}
}

export default List