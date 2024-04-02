import React, { useEffect, useState } from 'react'
import style from '@/styles/SideMenu.module.scss'
import Link from 'next/link';
import { useCategoryProvider } from 'src/lib/contexts/CategoryContext';
import { IoCloseOutline } from "react-icons/io5";
import arrow_right_w from "public/icons/arrow-right-w.svg"
import { FaHouse } from "react-icons/fa6";
import Image from 'next/image';

interface Props {
  data: any;
  status: string;
  handleSideMenuState: (status: boolean) => void;
}

export const SideMenu: React.FC<Props> = ({ handleSideMenuState, data, status }) => {
  const [isClosed, setIsClosed] = useState(false)
  const { categories } = useCategoryProvider();

  function handleClose() {
    setIsClosed(true);

    setTimeout(() => {
      handleSideMenuState(false);
    }, 200);
  }

  return (
    <div className={style.container}>
      <div onClick={() => handleClose()} className={`${style.backgoround} ${isClosed ? style.closed : style.opening}`}></div>
      <div className={`${style.sideMenu} ${isClosed ? style.closed : style.opening}`}>
        <button onClick={() => handleClose()} className={style.close_button}>
          <IoCloseOutline className={style.close_icon} />
        </button>
        <div className={style.userContainer}>
          {status === 'authenticated' ?
            <h4>Welcome, {data.user.name}</h4> :
            <div className={style.login_container}>
              <h4>Welcome!</h4>
              <div className={style.button_container}>
                <Link href={'/signup'} className={`${style.button} ${style.signin_button}`}>Sign In</Link>
                <Link href={"/login"} className={`${style.button} ${style.login_button}`}>Log In</Link>
              </div>
            </div>}
        </div>
        <Link href={'/'} onClick={() => handleClose()} className={style.home_button}>
          Home
          <FaHouse width={20} height={100} className={style.arrow_icon} />
        </Link>
        <ul className={style.categoriesContainer}>
          {categories.map((category, i: number) => (
            <li key={i}>
              <Link className={style.categoryLink} href={`/c/${category.slug}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default SideMenu;
