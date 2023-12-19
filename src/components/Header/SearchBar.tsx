import React from 'react'
import styles from '../../styles/Header.module.scss'
import Image from 'next/image'
import magGlass from 'public/icons/magnifyingGlassIcon.svg'

export default function SearchBar() {
  return (
    <div className={styles.nav_search_container}>
      <input
        type="search"
        placeholder="Search here"
        className={styles.header_SearchBar}
      />
      <button type="submit" className={styles.serach_btn}>
        <Image src={magGlass} alt="" className={styles.header_SearchBar_icon} width={20} height={20} />
      </button>
    </div>
  )
}
