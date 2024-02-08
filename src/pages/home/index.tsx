import * as React from 'react';
import style from './index.module.scss';
import fig from '../../images/gif.gif';
import Banner from '../../components/banner';
export default function Home() {
  return (
    <Banner className={style.hopaPage}>
      <div className={style.innerText}>
        <h1 className={style.mainTitle}>Hello, <br /> I Am  <span className={style.name}>Jitendra</span>, <span className={style.designation}>UI & UX Designer</span></h1>
        <p className={style.decription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde doloremque, dolores, eius atque eveniet quam blanditiis praesentium culpa provident, esse nesciunt et molestias? Iure cumque ratione nobis! Et, vel nihil!</p>
        <img className={style.gifImg} src={fig} alt="fig" />
      </div>
    </Banner>
  );
}
