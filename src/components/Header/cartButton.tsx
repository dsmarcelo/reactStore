import Link from 'next/link';
import React, { Component } from 'react'
import style from '../../styles/Header.module.scss';
import cart_icon from '../../../public/icons/cart-icon-b.svg'
import Image from 'next/image';

const cartButton = () => {
  return (
    <Link href="/favorites" className={style.nav_link}>
      <Image src={cart_icon} alt="" width={20} height={100} className={style.nav_cart_icon} />
      <span className={style.nav_link_text}>My Cart</span>
    </Link>
  );
}

export default cartButton;

