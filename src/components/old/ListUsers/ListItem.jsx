import s from "./List.module.css";
import { NavLink } from "react-router-dom";
import avatarM from './../img/ava_m.svg'
import avatarR from './../img/ava_r.svg'

const FollowButton = ( props ) => {
	
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<button disabled={props.disableButton} onClick={() => props.follow( props.id )}
		        className={`${s.button} ${s.follow}`}> Слідкувати
		</button>
	)
}
const UnFollowButton = ( props ) => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<button disabled={props.disableButton} onClick={() => props.unfollow( props.id )}
		        className={`${s.button} ${s.unFollow}`}>Відписатися
		</button>
	)
	
}

const ListItem = ( props ) => {
	return (
		<div className={s.list_item} data-id="19">
			<div><NavLink to={`/profile/${props.id}`}>
				<span className={s.avatar}>
					<img src={props.photoUrl.small != null
						? props.photoUrl.small
						: props.sex === "male"
							? avatarM : avatarR} alt=''/>
				</span>
			</NavLink>
			</div>
			<div className={s.flex}>
				<NavLink to={`/profile/${props.id}`} className={`${s.item_author} ${s.text_color}`}
				         data-abc="true">{props.name}- -{( props.id )} </NavLink>
				{props.followers.some( id => id === props.userId ) ?
					<UnFollowButton disableButton={props.disableButton} id={props.id} unfollow={props.unfollow}/>
					: <FollowButton disableButton={props.disableButton} follow={props.follow} id={props.id}/>}
				
				{/*}
				 <a onClick={props.followed ? () => props.unfollow( props.id ) : () => props.follow( props.id )}
				 className={`${s.button} ${props.followed ? s.unFollow : s.follow}`}>{props.followed ? 'Відписатися' : 'Слідкувати'}
				 </a>
				 {*/}
				<div className={`${s.text_muted} ${s.text_sm}`}>{props.status}</div>
			</div>
			<div className={s.no_wrap}>
				<div className={s.text_color}>{props.city}</div>
				<div className={`${s.text_muted} ${s.text_sm}`} data-abc="true">{props.country}</div>
			</div>
		</div> )
}

export default ListItem