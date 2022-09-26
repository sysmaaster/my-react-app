import s from './List.module.css'
import ListItem from "./ListItem";
import axios from "axios";


const List = ( props ) => {
	if ( props.ListItem.length === 0 ) {
		axios.get( "http://127.0.0.1:1880/users" ).then( response => {
			props.SetUsers( response.data.item )
		} )
	}
	const Lists = props.ListItem.map( e => <ListItem unfollow={props.UnFollowF} follow={props.FollowF} key={e.id}
	                                                 id={e.id} name={e.name} followed={e.followed} status={e.status}
	                                                 locations={e.locations} sex={e.sex} photoUrl={e.photoUrl}/> )
	
	return (
		<div className={s.container}>
			<div className="">
				<div className={`${s.list} ${s.list_row}`}>
					{Lists}
				</div>
			</div>
		</div>
	)
}
export default List