import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { SetInAuthorise, SetUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderComponent extends React.Component {
	componentDidMount() {
		authAPI.checkAuthToken().then( data => {
				if ( data.resuldCode === 0 ) {
					let { id, email, login } = data.data
					this.props.SetInAuthorise( true )
					this.props.SetUserData( id, email, login )
				}
			}
		)
	}
	
	render() {
		return (
			<Header emailUser={this.props.emailUser}
			        isFetching={this.props.isFetching}
			        isAuthorise={this.props.isAuthorise}/>
		)
	}
}

const mapStateToProps = ( props ) => {
	return {
		emailUser: props.auth.email,
		isFetching: props.auth.isFetching,
		isAuthorise: props.auth.isAuthorise
	}
}
export default connect( mapStateToProps, { SetUserData, SetInAuthorise } )( HeaderComponent )