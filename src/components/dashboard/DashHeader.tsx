import React from 'react'
import style from '@/styles/DashHeader.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Logo from 'public/Logo.png';
import SearchBar from '../Header/SearchBar';
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { signOut } from 'next-auth/react';

interface Props {
  data: any
}

export const DashHeader: React.FC<Props> = ({ data }) => {
  const userImg = data?.user?.image || undefined
  const userName = data?.user?.name || "Unknown"
  return (
    <div className={style.header_container}>
      <header className={style.header}>
        <Link href="/" className={style.header_logo_container}>
          <Image src={Logo} alt="" className={style.header_logo_img} />
        </Link>
        <SearchBar />
        <div className={style.account_info}>
          <button className={style.admin_info}>
            {userImg ?
              <Image src={data.user.image} alt='User Icon' />
              : <FaUserAlt />
            }
            <p>{userName}</p>
          </button>
          <button className={style.sign_out_button} onClick={() => signOut()}>
            <FiLogOut />
          </button>
        </div>
      </header>
    </div>
  )
}
