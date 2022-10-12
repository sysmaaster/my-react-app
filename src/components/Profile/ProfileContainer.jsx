import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import UserProfile from "./UserProfile";
import { useParams } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import { Follow, SendPost, SetUserProfile, toggleIsFetching, UnFollow } from "../../redux/profile-reducer";


export function withRouter( Children ) {
	return ( props ) => {
		const match = { params: useParams() };
		return <Children {...props} match={match}/>
	}
}

class ProfileContainer extends React.Component {
	
	componentDidMount = () => {
		let userId = this.props.match.params.userId
		if ( !userId ) {
			userId = 1
		}
		usersAPI.getUserProfile( userId ).then( data => {
				this.props.SetUserProfile( data.item )
				this.props.toggleIsFetching( false )
			}
		)
	}
	
	render() {
		return this.props.isFetching ? <Preloader/> : <UserProfile {...this.props}  />
	}
}

const mapStateToProps = ( props ) => {
	return {
		isFetching: props.profilePage.isFetching,
		profiles: props.profilePage.profile,
		authUserId: props.auth.userId
	}
}

export default connect( mapStateToProps, {
	toggleIsFetching,
	Follow,
	UnFollow,
	SendPost,
	SetUserProfile
} )( withRouter( ProfileContainer ) )