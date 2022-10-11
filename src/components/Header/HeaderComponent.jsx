import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import Header from "./Header";
import { SetInAuthorise, SetUserData } from "../../redux/auth-reducer";

class HeaderComponent extends React.Component {
	componentDidMount() {
		axios.get( `http://192.168.3.66:1880/auth/me` ).then( response => {
				if ( response.data.resuldCode === 0 ) {
					let { id, email, login } = response.data.data
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