import React from 'react';
import style from '../../styles/Dashboard.module.scss'
import { Sidenav } from '../../components/dashboard/Sidenav';

function Dashboard() {

  return <div className={style.main}>
    <Sidenav />
    <main>
      React Store Dashboard
    </main>
  </div>;
}

export default Dashboard;
