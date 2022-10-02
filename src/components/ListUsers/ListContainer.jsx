import { connect } from "react-redux";
import { CurrentPageAC, FollowAC, SetUsersAC, TotalCountAC, UnFollowAC } from "../../redux/listUser-reducer";
import React from "react";
import axios from "axios";
import List from "./List";

class ListContainer extends React.Component {
	componentDidMount() {
		if ( this.props.userList.length === 0 ) {
			axios.get( `http://127.0.0.1:1880/users?page=${this.props.currentPage}&count=${this.props.pagesSize}` ).then( response => {
				this.props.SetUsers( response.data.item )
				this.props.TotalCountF( response.data.totalCount )
			} )
		}
	}
	
	onPageChange = ( c ) => {
		this.props.CurrentPageF( c )
		axios.get( `http://127.0.0.1:1880/users?page=${c}&count=${this.props.pagesSize}` ).then( response => {
			this.props.SetUsers( response.data.item )
		} )
	}
	
	render() {
		return (
			<List unfollow={this.props.UnFollowF} follow={this.props.FollowF}
			      userList={this.props.userList} onPageChange={this.onPageChange}
			      currentPage={this.props.currentPage} totalCount={this.props.totalCount}
			      pagesSize={this.props.pagesSize}
			/> )
	}
}

const mapStateToProps = ( props ) => {
	
	return {
		totalCount: props.userList.totalCount,
		currentPage: props.userList.currentPage,
		pagesSize: props.userList.pagesSize,
		
		userList: props.userList.users,
	}
}
const mapDispatchToProps = ( dispatch ) => {
	return {
		UnFollowF: ( userId ) => { dispatch( UnFollowAC( userId ) ) },
		SetUsers: ( users ) => { dispatch( SetUsersAC( users ) ); },
		FollowF: ( userId ) => { dispatch( FollowAC( userId ) ); },
		CurrentPageF: ( currentPage ) => { dispatch( CurrentPageAC( currentPage ) )},
		TotalCountF: ( totalCount ) => { dispatch( TotalCountAC( totalCount ) )}
	}
}
export default connect( mapStateToProps, mapDispatchToProps )( ListContainer );
