import React from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import { connect } from "react-redux";
import { Follow, SendPost, SetUserProfile, toggleIsFetching, UnFollow } from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { useParams } from "react-router-dom";


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
		debugger
		this.props.toggleIsFetching( true )
		axios.get( `http://192.168.3.66:1880/profile/${userId}` ).then( response => {
				this.props.SetUserProfile( response.data.item )
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
		profiles: props.profilePage.profile
	}
}

export default connect( mapStateToProps, {
	toggleIsFetching,
	Follow,
	UnFollow,
	SendPost,
	SetUserProfile
} )( withRouter( ProfileContainer ) )