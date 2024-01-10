import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { whenAuthoriseMe } from "../../../redux/auth-reducer";

class HeaderComponent extends React.Component {
	componentDidMount() {
		this.props.whenAuthoriseMe()
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
export default connect( mapStateToProps, { whenAuthoriseMe } )( HeaderComponent )