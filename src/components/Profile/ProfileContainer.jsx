import React from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import { connect } from "react-redux";
import { SendPost, SetUserProfile, toggleIsFetching } from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
	componentDidMount = () => {
		this.props.toggleIsFetching( true )
		axios.get( `http://192.168.3.66:1880/profile/2` ).then( response => {
			this.props.SetUserProfile( response.data.item )
			this.props.toggleIsFetching( false )
			}
		)
	}
	
	render() {
		return (
			<UserProfile {...this.props}  />
		)
	}
}

const mapStateToProps = ( props ) => {
	return {
		isFetching: props.profilePage.isFetching,
		profiles: props.profilePage.profile
	}
}

export default connect( mapStateToProps, { toggleIsFetching, SendPost, SetUserProfile } )( ProfileContainer )