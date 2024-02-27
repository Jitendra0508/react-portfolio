import * as React from 'react';
import style from './index.module.scss';
import fig from '../../images/gif.gif';
import Banner from '../../components/banner';
import { TypeAnimation } from 'react-type-animation';
import FlexBox from '../../components/flexbox';
import Button from '../../components/button';
export default function Home() {
  return (
    <Banner className={style.hopaPage}>
      <FlexBox style={{position:'relative', zIndex:'2'}} className={style.bannerClass}>
        <div className={style.profile}><img className={style.gifImg} src={fig} alt="fig" /></div>
        <div className={style.innerText}>
          <FlexBox className={style.availabily}>
            <div className={style.availabilyBox}>Available for freelance work</div>
            <div className={style.availabilyBox}>Tuesday, 27 February, 2024</div>
            {/* <div className={style.availabilyBox}></div> */}
            <Button innnerText='Contact us'>Contact us</Button>
          </FlexBox>
          <h1 className={style.mainTitle}>Hello, <br /> I'm a ,  <TypeAnimation
            sequence={[
              "UI & UX Designer",
              1000,
              "Html Developer",
              1000,
              "Web Designer",
              1000,
              "Web Developer",
              1000,
            ]}
            speed={50}
            className={style.designation}
            repeat={Infinity}
          />  </h1>
          <p className={style.decription}>I am jitendra kushwah, Experienced Web Designer & Developer with 2.5 years of dedicated expertise in HTML, CSS, and JavaScript. Proficient in creating responsive and visually engaging web interfaces.</p>
          {/* <img className={style.gifImg} src={fig} alt="fig" /> */}
        </div>
      </FlexBox>
    </Banner>
  );
}
