import { connect } from "react-redux";
import { CurrentPage, Follow, SetUsers, toggleIsFetching, TotalCount, UnFollow } from "../../redux/listUser-reducer";
import React from "react";
import axios from "axios";
import List from "./List";
import Preloader from "../common/Preloader/Preloader";


class ListContainer extends React.Component {
	componentDidMount() {
		if ( this.props.userList.length === 0 ) {
			this.props.toggleIsFetching( true )
			axios.get( `http://127.0.0.1:1880/users?page=${this.props.currentPage}&count=${this.props.pagesSize}` ).then( response => {
				this.props.SetUsers( response.data.item )
				this.props.TotalCount( response.data.totalCount )
				this.props.toggleIsFetching( false )
			} )
		}
	}
	
	onPageChange = ( c ) => {
		this.props.toggleIsFetching( true )
		this.props.CurrentPage( c )
		axios.get( `http://127.0.0.1:1880/users?page=${c}&count=${this.props.pagesSize}` ).then( response => {
			this.props.SetUsers( response.data.item )
			this.props.toggleIsFetching( false )
		} )
	}
	
	render() {
		return (
			< >
				{this.props.isFetching ? <Preloader/> :
					<List unfollow={this.props.UnFollow}
					      follow={this.props.Follow}
					      userList={this.props.userList} onPageChange={this.onPageChange}
					      currentPage={this.props.currentPage} totalCount={this.props.totalCount}
					      pagesSize={this.props.pagesSize}
					/>
				}
			</>
		)
	}
}

const mapStateToProps = ( props ) => {
	
	return {
		totalCount: props.userList.totalCount,
		currentPage: props.userList.currentPage,
		pagesSize: props.userList.pagesSize,
		isFetching: props.userList.isFetching,
		
		userList: props.userList.users,
	}
}
// const mapDispatchToProps = ( dispatch ) => {
// 	return {
// 		UnFollow: ( userId ) => { dispatch( UnFollow( userId ) ) },
// 		SetUsers: ( users ) => { dispatch( SetUsers( users ) ); },
// 		Follow: ( userId ) => { dispatch( Follow( userId ) ); },
// 		CurrentPage: ( currentPage ) => { dispatch( CurrentPage( currentPage ) )},
// 		TotalCount: ( totalCount ) => { dispatch( TotalCount( totalCount ) )}
// 	}
// }

export default connect( mapStateToProps, {
	Follow,
	UnFollow,
	SetUsers,
	CurrentPage,
	TotalCount,
	toggleIsFetching
} )( ListContainer );
