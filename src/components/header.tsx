import React from 'react';
import SearchBar from './SearchBar';
import style from '../styles/Header.module.scss';
import Logo from '../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <Link href="/" className={style.header_logo_container}>
          <Image src={Logo} alt="" className={style.header_logo_img} />
        </Link>

        <SearchBar />
        <Link href="/login">
          <h4 className={style.header_userImg}>User</h4>
        </Link>
      </div>
    </header>
  );
}

export default Header;
