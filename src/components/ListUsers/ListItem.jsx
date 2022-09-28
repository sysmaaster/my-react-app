import s from "./List.module.css";
import { NavLink } from "react-router-dom";
import avatarM from './../img/ava_m.svg'
import avatarR from './../img/ava_r.svg'

const ListItem = ( props ) => {
	return (
		<div className={s.list_item} data-id="19">
			<div><NavLink to={`/profile/${props.id}`}>
				<span className={s.avatar}>
					<img src={props.photoUrl.small != null
						? props.photoUrl.small
						: props.sex === "male"
							? avatarM
							: avatarR} alt=''/>
				</span></NavLink></div>
			<div className={s.flex}>
				<NavLink to={`/profile/${props.id}`} className={`${s.item_author} ${s.text_color}`}
				         data-abc="true">{props.name}---{( props.id )}</NavLink>
				<a onClick={props.followed ? () => props.unfollow( props.id ) : () => props.follow( props.id )}
				   className={`${s.button} ${props.followed ? s.unFollow : s.follow}`}>{props.followed ? 'Відписатися' : 'Слідкувати'}</a>
				<div className={`${s.text_muted} ${s.text_sm}`}>{props.status}</div>
			</div>
			<div className={s.no_wrap}>
				<div className={s.text_color}>{props.city}</div>
				<div className={`${s.text_muted} ${s.text_sm}`} data-abc="true">{props.country}</div>
			</div>
		</div> )
}

export default ListItem