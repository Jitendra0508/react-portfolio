import * as React from 'react';
import Banner from '../../components/banner';
import Heading from '../../components/heading';
import style from './index.module.scss';
export default function Contact () {
  return (
    <Banner>
        <div className={style.aboutMe}>
        <Heading heading='Contack us' />
        <p className={style.decription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aspernatur vero omnis necessitatibus dolorem saepe eum molestias nemo quidem ipsa doloremque commodi dolorum incidunt debitis, accusamus fugit molestiae consectetur obcaecati!</p>
      </div>
      
    </Banner>

  );
}
