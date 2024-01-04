import React from 'react';
import style from '../../styles/Header.module.scss';
import HeaderCategoryNav from './headerCategoryNav';
import MainHeader from './MainHeader';

const Header = () => {
  return (
    <header className={style.header}>
      <MainHeader />
      <div className={style.header_main_nav_container}>
        <HeaderCategoryNav />
      </div>
    </header >
  );
}

export default Header;
