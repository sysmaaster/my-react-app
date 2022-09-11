import React from 'react';
import s from "./Search.module.css"

const Search = (props) => {
    let searchInputElement = React.createRef();
    let searchDialogItem = () => {
        let text = searchInputElement.current.value;
        props.searchDialog(text);
    }
    let newSearchText = () => {
        let text = searchInputElement.current.value;
        props.newSearchInputText(text);
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