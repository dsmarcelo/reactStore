import React from 'react';
import SearchBar from './SearchBar';
import style from '../styles/Header.module.scss';
import Logo from '../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';
import BackCategoryBar from './backCategoryBar';

type props = {
  category: string
}

const HeaderCategory: React.FC<props> = ({ category }) => {
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <Link href="/" className={style.header_logo_container}>
          <Image src={Logo} alt="" className={style.header_logo_img} />
        </Link>

        <SearchBar />
        <h4 className={style.header_userImg}>User</h4>
      </div>
      <BackCategoryBar name={category} />
    </header>
  );
}

export default HeaderCategory;
