import React from 'react';
import style from '../../styles/Header.module.scss';
import BackCategoryBar from './backCategoryBar';
import MainHeader from './MainHeader';

type props = {
  categoryName: string
}

const MobileCategoryHeader: React.FC<props> = ({ categoryName }) => {
  return (
    <header className={style.header}>
      <MainHeader />
      <BackCategoryBar name={categoryName} />
    </header>
  );
}

export default MobileCategoryHeader;
