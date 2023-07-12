import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import style from '../styles/Header.module.scss';
import Logo from '../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const { data, status } = useSession()

  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <Link href="/" className={style.header_logo_container}>
          <Image src={Logo} alt="" className={style.header_logo_img} />
        </Link>
        <SearchBar />
        <Link href="/favorites" className={style.nav_link}>
          <p className={style.nav_link_text}>Favorites</p>
        </Link>
        <Link href="/login" className={style.nav_link}>
          <p className={style.nav_link_text}>{data?.user?.name || "Sign In"}</p>
        </Link>
        {status === "authenticated" ?
          <button className={style.btn_signOut} onClick={() => signOut({ callbackUrl: "/login" })}>Sign In</button>
          : null}
        <Link href="/favorites" className={style.nav_link}>
          <p className={style.nav_link_text}>My Cart</p>
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
