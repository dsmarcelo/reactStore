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
        <Link href="/login">
          <h4 className={style.header_userImg}>{data?.user?.name || "Entrar"}</h4>
        </Link>
        { status === "authenticated" ?
          <button className={style.btn_signOut} onClick={() => signOut({ callbackUrl: "/login" })}>Sair</button>
        : null}
      </div>
    </header>
  );
}

export default Header;
