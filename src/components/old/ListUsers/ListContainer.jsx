import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { Follow, GetUsersList, UnFollow } from "../../redux/listUser-reducer";
import Preloader from "../common/Preloader/Preloader";

class ListContainer extends React.Component {
	componentDidMount() {
		this.props.GetUsersList( this.props.currentPage, this.props.pagesSize )
	}
	
	render() {
		return (
			< >
				{this.props.isFetching ? <Preloader/> :
					<List unfollow={this.props.UnFollow}
					      follow={this.props.Follow}
					      followingIsProgress={this.props.followingIsProgress}
					      userId={this.props.userId}
					      userList={this.props.userList} GetUsersList={this.props.GetUsersList}
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
		userId: props.auth.userId,
		totalCount: props.userList.totalCount,
		currentPage: props.userList.currentPage,
		pagesSize: props.userList.pagesSize,
		isFetching: props.userList.isFetching,
		userList: props.userList.users,
		followingIsProgress: props.userList.followingIsProgress,
	}
};
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
	GetUsersList
} )( ListContainer );
