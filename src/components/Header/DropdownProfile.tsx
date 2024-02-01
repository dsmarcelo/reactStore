import React, { ReactNode } from 'react';
import style from '../../styles/Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Arrow_down from '../../../public/icons/arrow-down-b.svg';
import { signOut } from 'next-auth/react';

interface Props {
  data: any;
  status: string;
}

const DropdownProfile: React.FC<Props> = ({ data, status }) => {
  return (
    <div className={style.login_dropdown}>
      <Link href="/login">
        <div className={style.nav_link}>
          <span className={style.nav_link_text}>{data?.user?.name || "Login"}</span>
          <Image src={Arrow_down} alt="" width={14} height={100} className={style.nav_icon} />
        </div>
      </Link>
      <div className={style['dropdown-content']}>
        <div className={style.dropdown_btn_container}>
          {status === "authenticated" ?
            <>
              <p className={style.user_name}>{`Hello, ${data.user.name}`}</p>
              <Link className={style.btn_signin} href={'/'}>Account</Link>
              <button className={style.btn_signup} onClick={() => signOut()}>Sign out</button>
            </>
            :
            <>
              <Link href={"/signup"} className={style.btn_signin}>
                <span>Sign Up</span>
              </Link>
              <Link href={"/login"} className={style.btn_signup}>
                <span>Sign In</span>
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;