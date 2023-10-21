import React, { ReactNode } from 'react';
import style from '../../styles/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Arrow_down from '../../../public/icons/arrow-down-b.svg';

interface Props {
  data: any;
  status: string;
}

//TODO: add logic to change dropdown when signed in

const DropdownProfile: React.FC<Props> = ({ data, status }) => {
  return (
    <div className={style.login_dropdown}>
      {/* {status === "authenticated" ?
        <button className={style.btn_signOut} onClick={() => signOut({ callbackUrl: "/login" })}>Sign In</button>
        : null} */}
      <Link href="/login">
        <div className={style.nav_link}>
          <span className={style.nav_link_text}>{data?.user?.name || "Login"}</span>
          <Image src={Arrow_down} alt="" width={14} height={100} className={style.nav_icon} />
        </div>
      </Link>
      <div className={style['dropdown-content']}>
        <div className={style.login_btn_container}>
          <Link href={"/signup"} className={style.btn_signin}>
            <span>Sign Up</span>
          </Link>
          <Link href={"/login"} className={style.btn_signup}>
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;