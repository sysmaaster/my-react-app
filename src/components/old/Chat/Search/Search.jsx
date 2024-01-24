import React from 'react';
import s from "./Search.module.css"


const Search = (props) => {
    let searchInputElement = React.createRef();
    let searchDialogItem = () => {
        props.searchItem();
    };
    let newSearchText = ( e ) => {
        let text = searchInputElement.current.value;
        props.newTextSearch( text );
    };

    return (
        <div className={s.search}>
            <div className={s.searchbar}>
                <input type="text" placeholder="Search..."
                       ref={searchInputElement}
                       onChange={newSearchText}
                       value={props.newSearchInputText}></input>
                <i className={s.icon + " " + s.fa_search} onClick={searchDialogItem} aria-hidden="true"></i>
            </div>
        </div>
    )
};
export  default Search