import s from './List.module.css'
import ListItem from "./ListItem";


const List = ( props ) => {
	const Lists = props.ListItem.map( e => <ListItem unfollow={props.UnFollowF} follow={props.FollowF} key={e.id}
	                                                 id={e.id} name={e.name} followed={e.followed} status={e.status}
	                                                 country={e.locations.country} city={e.locations.city}/> )
	
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