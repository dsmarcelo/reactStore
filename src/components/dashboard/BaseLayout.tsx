import React, { ReactNode } from 'react'
import { Sidebar } from 'src/components/dashboard/Sidebar'
import style from '../../styles/Dashboard.module.scss'
import { DashHeader } from './DashHeader'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode | ReactNode[]
}

export const BaseLayout = ({ children }: Props) => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/login")
  }
  return (
    <div className={style.layout}>
      <DashHeader data={data} />
      <div className={style.content}>
        <Sidebar />
        {children}

      </div>
    </div>
  )
}
