import Link from 'next/link'
import { usePathname } from 'next/navigation';
import style from '../../styles/Dashboard.module.scss'
import React from 'react'

interface menu_item {
  href: string,
  label: string
}

export const MenuItem = ({ data }: { data: menu_item }) => {
  const { href, label } = data
  const pathname = usePathname();
  const isActive = href === pathname
  return (
    <Link href={href} className={isActive ? style.active : style.menu_item}>{label}</Link>
  )
}
