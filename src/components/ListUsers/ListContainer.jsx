import { connect } from "react-redux";
import List from "./List";
import { FollowAC, SetUsersAC, UnFollowAC } from "../../redux/listUser-reducer";

const mapStateToProps = ( props ) => {
	return {
		ListItem: props.userList.users
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		UnFollowF: ( userId ) => { dispatch( UnFollowAC( userId ) ) },
		SetUsers: ( users ) => { dispatch( SetUsersAC( users ) ); },
		FollowF: ( userId ) => { dispatch( FollowAC( userId ) ); }
	}
}
const ListContainer = connect( mapStateToProps, mapDispatchToProps )( List );


export default ListContainer