import * as React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import FlexBox from '../flexbox';
export default function SocialMedia() {
    return (
        <>
            <FlexBox>
                <Link className={style.navlink} to='/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                <Link className={style.navlink} to='/'><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
                <Link className={style.navlink} to='/'><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
                <Link className={style.navlink} to='/'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            </FlexBox>
        </>
    );
}
