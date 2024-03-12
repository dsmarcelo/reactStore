import React, { useEffect, useState } from 'react';
import style from '../../styles/Header.module.scss';
import HeaderCategoryNav from './headerCategoryNav';
import MainHeader from './MainHeader';
import { useCategoryProvider } from '../../lib/contexts/CategoryContext';
import Link from 'next/link';

const Header = () => {
  const { categories } = useCategoryProvider();

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll < 54) {
        setIsScrolled(false)
      } else if (currentScroll < lastScroll) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
      lastScroll = currentScroll
    };

    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <MainHeader />
        <nav className={`${style.header_main_nav}  ${isScrolled && style.hidden}`}>
          <Link href="/c/" className={style.main_nav_link}>Categories</Link>
          {categories ?
            categories.map((category, i) => (
              <Link
                key={i}
                href={`/c/${category.slug}`}
                className={style.main_nav_link} >
                {category.name}
              </Link>
            )) : null}
        </nav>
      </div>
    </header >
  );
}

export default Header;
