import React from 'react'
import style from '../../styles/Dashboard.module.scss'
import { MenuItem } from './MenuItem';

export const Sidebar = () => {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Products',
      href: '/dashboard/products'
    },
    {
      label: 'Categories',
      href: '/dashboard/categories'
    },
    {
      label: 'Orders',
      href: '/dashboard/orders'
    }
  ]
  return <div>
    <nav className={style.navContainer}>
      {links.map((data, i) => {
        return <MenuItem key={i} data={data} />
      })}
    </nav>
  </div >
}
