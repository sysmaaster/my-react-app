import s from "./List.module.css";
import React from "react";
import ListItem from "./ListItem";

let List = ( props ) => {
	let Pages = Math.ceil( props.totalCount / props.pagesSize );
	let count = []
	for ( let i = 1; i <= Pages; i++ ) {
		count.push( i );
	}
	
	let CountItems = count.map( c => <span className={props.currentPage === c ? `${s.currentPage} ${s.button}` : ""}
	                                       style={{
		                                       cursor: "pointer",
		                                       display: "inline-block",
		                                       margin: "5px",
		                                       padding: "10px"
	                                       }}
	                                       key={c}
	                                       onClick={() => {props.GetUsersList( c, props.pagesSize ) }}>{c}
									</span> )
	
	let Lists = props.userList.map( e => <ListItem
		disableButton={props.followingIsProgress.some( id => id === e.id )}
		followers={e.followers}
		unfollow={props.unfollow} follow={props.follow} userId={props.userId}
		key={e.id}
		id={e.id} name={e.name} followed={e.followed}
		status={e.status}
		country={e.locations.country} city={e.locations.city}
		sex={e.sex} photoUrl={e.photoUrl}/> )
	
	return ( <div className={s.container}>
		<div className={`${s.list} ${s.list_row}`}>
			<div> {CountItems} </div>
			{Lists}
		</div>
	</div> )
}

export default List