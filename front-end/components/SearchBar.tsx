import React from 'react'
import Styles from '../styles/Header.module.scss'

export default function SearchBar() {
  return (
    <div >
      <input
      type="search"
      placeholder="Pesquise aqui"
      className={Styles.header_SearchBar}
      />
    </div>
  )
}
