import React from 'react'
import style from '../styles/Login.module.scss'
import Logo from '../../public/Logo.png';
import Link from 'next/link';
import Image from 'next/image'

export const SignUpForm = () => {
  return (
    <div>
      <Link href="/" className={style.logoContainer}>
        <Image src={Logo} alt='Logo' priority className={style.logo_img} />
      </Link>
      <form className={style.loginForm}>
        <div>
          <label>Nome</label>
          <input
            className={style.text_input}
            type="name"
            name="name"
            id="name"
            required
            minLength={2}
            maxLength={120}
          />
        </div>
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
        </div>
        <div>
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
          <p>Criar Conta</p>
        </button>
        <Link href='/login' className={style.btn_secondary}>
          <p>Entrar</p>
        </Link>
      </form >
    </div>
  )
}