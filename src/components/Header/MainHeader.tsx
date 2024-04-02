import React, { useState } from 'react'
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
import { SideMenu } from '../sideMenu/SideMenu';

export default function MainHeader() {
  const { data, status } = useSession();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleSideMenuState = (status: boolean) => {
    setIsSideMenuOpen(status)
  }

  return (
    <div className={style.main_header_container}>
      {isSideMenuOpen && <SideMenu handleSideMenuState={(status) => handleSideMenuState(status)} data={data} status={status} />}
      <Link href="/" className={style.header_logo_container}>
        <Image src={Logo} alt="" className={style.header_logo_img} />
      </Link>
      <button className={style.nav_menu} onClick={() => setIsSideMenuOpen(true)}>
        <Image src={hamburguerMenu} className={style.nav_menu_ham_icon} alt="Menu" width={25} />
      </button>
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
