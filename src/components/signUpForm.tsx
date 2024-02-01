import React, { useState } from 'react'
import style from '../styles/Login.module.scss'
import Logo from '../../public/Logo.png';
import Link from 'next/link';
import Image from 'next/image'

export const SignUpForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  function validateEmail(email: string) {
    return emailRegex.test(email)
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    if (!validateEmail) return setMessage("Invalid email")

    try {
      const response = await fetch('/api/u/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setMessage('Internal Server Error');
    }
  };

  return (
    <div>
      <Link href="/" className={style.logoContainer}>
        <Image src={Logo} alt='Logo' priority className={style.logo_img} />
      </Link>
      <form className={style.loginForm} onSubmit={(e) => handleSubmit(e)}>
        {message && <p>{message}</p>}
        <div>
          <label htmlFor='name'>Name</label>
          <input
            className={style.text_input}
            type="name"
            name="name"
            id="name"
            value={name}
            required
            minLength={2}
            maxLength={120}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            className={style.text_input}
            type="email"
            name="email"
            id="email"
            value={email}
            required
            minLength={3}
            maxLength={120}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            className={style.text_input}
            type="password"
            name="password"
            id="password"
            value={password}
            required
            minLength={3}
            maxLength={120}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className={style.btn_primary}>
          <p>Create Account</p>
        </button>
        <div className={style.signIn_container}>
          <p>Already have an account?</p>
          <Link href='/login' className={style.btn_secondary}>
            Sign In
          </Link>
        </div>
      </form >
    </div>
  )
}