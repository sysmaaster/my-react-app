import React from "react";
import UserProfile from "./UserProfile";
import axios from "axios";
import { connect } from "react-redux";
import { toggleIsFetching } from "../../redux/listUser-reducer";


class ProfileContainer extends React.Component {
	componentDidMount = () => {
		this.props.toggleIsFetching( true )
		axios.get( `http://192.168.3.66:1880/profile/2` ).then( response => {
				this.props.SetUsers( response.data.item )
				this.props.toggleIsFetching( false )
			}
		)
	}
	
	render() {
		return (
			<UserProfile props={this.props}/>
		)
	}
}

const mapStateToProps = ( props ) => {
	return {
		isFetching: props.userList.isFetching,
	}
}

export default connect( mapStateToProps, { toggleIsFetching } )( ProfileContainer )