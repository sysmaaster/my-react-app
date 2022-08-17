import React from 'react';
import s from "./Search.module.css"

const Search = () => {
  return (
      <div className={ s.search}>
        <div className={s.searchbar}>
          <i className={s.fa + " " +  s.fa_search} aria-hidden="true">1</i>
          <input type="text" placeholder="Search..."></input>
        </div>
      </div>
)
}
export  default Search