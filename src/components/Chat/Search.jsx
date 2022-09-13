import React from 'react';
import s from "./Search.module.css"

const Search = (props) => {
    let searchInputElement = React.createRef();
    let searchDialogItem = () => {
        props.dispatch({type: 'SEARCH-DIALOG'});
    }
    let newSearchText = () => {
        let text = searchInputElement.current.value;
        props.dispatch({type: 'UPDATE-SEARCH-INPUT', newText: text});
    }

    return (
        <div className={s.search}>
            <div className={s.searchbar}>
                <input type="text" placeholder="Search..."
                       ref={searchInputElement}
                       onChange={newSearchText}
                       value={props.newSearchValue}></input>
                <i className={s.icon + " " + s.fa_search} onClick={searchDialogItem} aria-hidden="true"></i>
            </div>
        </div>
    )
}
export  default Search