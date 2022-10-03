import React from 'react';
import SearchBar from './SearchBar';
import Styles from '../styles/Header.module.scss';
import Logo from '../public/Logo.png';
import Image from 'next/future/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={Styles.header}>
      <div className={Styles.header_container}>
        <Link href="/" className={Styles.header_logo_container}>
          <Image src={Logo} alt="" className={Styles.header_logo_img} />
        </Link>

        <SearchBar />
        <h4 className={Styles.header_userImg}>User</h4>
      </div>
    </header>
  );
}
