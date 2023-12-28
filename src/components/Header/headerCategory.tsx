import React from 'react';
import style from '../../styles/Header.module.scss';
import BackCategoryBar from './backCategoryBar';
import MainHeader from './MainHeader';

type props = {
  categoryName: string
}

const HeaderCategory: React.FC<props> = ({ categoryName }) => {
  return (
    <header className={style.header}>
      <MainHeader />
      <BackCategoryBar name={categoryName} />
    </header>
  );
}

export default HeaderCategory;
