import React from 'react'
import style from '../../styles/Header.module.scss';
import Link from 'next/link';
import { useCategoryProvider } from '../../lib/contexts/CategoryContext';

export default function HeaderCategoryNav() {
  const { categories } = useCategoryProvider();

  return (
    <nav className={style.header_main_nav}>
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
  )
}
