import * as React from 'react';
import style from '../layout/index.module.scss'
import Sidebar from '../components/sidebar';
 
export default function Layout () {
  return (
    <div className={style.layout}>
      <Sidebar/>
    </div>
  );
}
