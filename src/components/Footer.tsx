import React from 'react'
import style from '@/styles/Footer.module.scss'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <Link href='https://github.com/dsmarcelo' target="_blank">
          <h4>Made by dsmarcelo</h4>
        </Link>
        <div className={style.right_side_links}>
          <Link href='https://freepik.com/' target="_blank">
            <h5>Images by Freepik</h5>
          </Link>
          <Link href='https://unsplash.com/' target="_blank">
            <h5>Images by Unsplash</h5>
          </Link>
        </div>
      </div>
    </footer>
  )
}
