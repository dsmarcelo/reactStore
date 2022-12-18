import Image from 'next/image'
import React from 'react'
import style from '../styles/Login.module.scss'
import Logo from '../../public/Logo.png';
import Link from 'next/link';

const loginPage = () => {
  return (
    <>
      <Link href="/" className={style.logoContainer}>
        <Image src={Logo} alt='Logo' className={style.logo_img} />
      </Link>
      <form className={style.loginForm}>
        <div>
          <label>Email</label>
          <input
            className={style.text_input}
            type="email"
            name="email"
            id="email"
            required
            minLength={3}
            maxLength={120}
          />
          <label>Senha</label>
          <input
            className={style.text_input}
            type="passsword"
            name="passsword"
            id="passsword"
            required
            minLength={3}
            maxLength={120}
          />
        </div>
        <button type='button' className={style.btn_primary}>
          <p>Entrar</p>
        </button>
        <button type='button' className={style.btn_secondary}>
          <p>Criar Conta</p>
        </button>
      </form >
    </>
  )
}

export default loginPage