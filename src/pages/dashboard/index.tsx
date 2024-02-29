import React from 'react';
import style from '../../styles/Dashboard.module.scss'
import { BaseLayout } from 'src/components/dashboard/BaseLayout';

// https://www.youtube.com/watch?v=_ORPWeJFXwQ

function Dashboard() {
  return <>
    <BaseLayout>
      <main>
        React Store Dashboard
      </main>
    </BaseLayout>
  </>
}

export default Dashboard;
