import React from 'react';
import s from "./Search.module.css"

const Search = () => {
  return (
      <div className={ s.search}>
        <div className={s.searchbar}>
          <input type="text" placeholder="Search..."></input>
            <i className={s.icon + " " +  s.fa_search}  aria-hidden="true"></i>
        </div>
      </div>
)
}
export  default Search