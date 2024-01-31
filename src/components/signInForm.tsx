import React, { useState } from 'react'
import style from '../styles/Login.module.scss'
import Logo from '../../public/Logo.png';
import Link from 'next/link';
import Image from 'next/image'
import { signIn } from 'next-auth/react';

export const LoginForm = () => {
  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [authState, setAuthState] = useState({
    error: '',
    processing: false
  });

  function simplifyAuthError(error: string) {
    let simplifiedError = ""

    if (error === null) {
      simplifiedError = ""
    }
    if (error === "CredentialsSignin") {
      simplifiedError = "Invalid email or password";
    } else {
      simplifiedError = "Sorry! There was an error on our side"
    }
    setAuthState({ processing: false, error: simplifiedError })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setAuthState({ processing: true, error: '' })

    if (!password) return null;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!response) {
      return null
    } else if (response.error) {
      simplifyAuthError(response.error)
    }
  }

  return (
    <div>
      <Link href="/" className={style.logoContainer}>
        <Image src={Logo} alt='Logo' priority className={style.logo_img} />
      </Link>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={style.text_input}
            type="email"
            name="email"
            id="email"
            value={email}
            autoComplete='email'
            required
            minLength={3}
            maxLength={120}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            className={style.text_input}
            type="password"
            name="password"
            id="password"
            value={password}
            autoComplete="current-password"
            required
            minLength={3}
            maxLength={120}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {authState.error !== '' ? <p style={{ "color": "red" }}>Invalid email or password</p> : null}
        <button type='submit' className={style.btn_primary}>
          {authState.processing ? <p>Loading...</p> : <p>Entrar</p>}
        </button>
        <Link href='/signup' className={style.btn_secondary}>
          <p>Criar Conta</p>
        </Link>
      </form >
    </div>
  )
}
