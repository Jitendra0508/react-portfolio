import * as React from 'react';
import Logo from '../Logo/logo';
import FlexBox from '../flexbox';
import SocialMedia from '../socialMedia';
import styles from './index.module.scss';

export default function Footer() {
  const style = {
    backgroundColor: '#1a1826',
    padding: '20px 0'
  }
  return (
    <footer style={style}>
      <div className='container'>
        <FlexBox style={{justifyContent:'space-between'}}>
          <Logo style={{ color: '#fff' }} />
          <SocialMedia className={styles.iconColor} />
        </FlexBox>
      </div>
    </footer>

  );
}
