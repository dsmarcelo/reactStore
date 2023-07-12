import React from 'react'
import Styles from '../styles/Header.module.scss'

export default function SearchBar() {
  return (
    <div className={Styles.nav_search_container}>
      <input
        type="search"
        placeholder="Search here"
        className={Styles.header_SearchBar}
      />
    </div>
  )
}
