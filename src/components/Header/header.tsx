import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import DropdownProfile from './DropdownProfile';
import style from '../../styles/Header.module.scss';
import Logo from '../../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import heart_icon from '../../../public/icons/heart-icon-b.svg'

const Header = () => {
  const { data, status } = useSession()

  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <Link href="/" className={style.header_logo_container}>
          <Image src={Logo} alt="" className={style.header_logo_img} />
        </Link>
        <SearchBar />
        <Link href="/favorites">
          <div className={style.nav_link}>
            <span className={style.nav_link_text}>Favorites</span>
            <Image src={heart_icon} alt="" width={14} height={100} className={style.nav_icon} />
          </div>
        </Link>
        <DropdownProfile data={data} status={status} />
        <Link href="/favorites" className={style.nav_link}>
          <span className={style.nav_link_text}>My Cart</span>
        </Link>
      </div>
      <div className={style.header_main_nav_container}>
        <nav className={style.header_main_nav}>
          <Link href="/c/" className={style.main_nav_link}>Categories</Link>
          <Link href="/c/" className={style.main_nav_link}>Clothing</Link>
          <Link href="/c/" className={style.main_nav_link}>Eletronics</Link>
          <Link href="/c/" className={style.main_nav_link}>Automotive</Link>
          <Link href="/c/" className={style.main_nav_link}>Home Appliances</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
