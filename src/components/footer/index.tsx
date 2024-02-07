import * as React from 'react';
import Logo from '../Logo/logo';

export default function Footer () {
    const style ={
        backgroundColor:'#0a090d',
        padding:'40px 0'
    }
  return (
    <footer style={style}>
        <div className='container'>
        <Logo style={{color:'#fff'}}/>
        </div>
    </footer>
     
  
  );
}
