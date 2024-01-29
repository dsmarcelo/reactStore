import React from 'react'
import SearchBar from './SearchBar';
import DropdownProfile from './DropdownProfile';
import CartButton from './cartButton';
import style from '../../styles/Header.module.scss';
import Logo from '../../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import heart_icon from '../../../public/icons/heart-icon-b.svg'
import hamburguerMenu from '../../../public/icons/hamburguerMenuIcon.svg'

export default function MainHeader() {
  const { data, status } = useSession();
  return (
    <div className={style.header_container}>
      <Link href="/" className={style.header_logo_container}>
        <Image src={Logo} alt="" className={style.header_logo_img} />
      </Link>
      <div className={style.nav_menu}>
        <Image src={hamburguerMenu} className={style.nav_menu_ham_icon} alt="Menu" width={25} />
      </div>
      <SearchBar />
      <Link href="/favorites">
        <div className={style.nav_link}>
          <span className={style.nav_link_text}>Favorites</span>
          <Image src={heart_icon} alt="" width={20} height={100} className={style.nav_icon} />
        </div>
      </Link>
      <DropdownProfile data={data} status={status} />
      <CartButton />
    </div>
  )
}
