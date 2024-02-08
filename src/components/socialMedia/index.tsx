import * as React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import FlexBox from '../flexbox';
import clsx from 'clsx';
export interface Props {
    className?:string;
}
export default function SocialMedia({className}: Props) {
    return (
        <>
            <FlexBox>
                <Link className={clsx(style.navlink, className)} to='/'><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
                <Link className={clsx(style.navlink, className)} to='/'><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
                <Link className={clsx(style.navlink, className)} to='/'><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
                <Link className={clsx(style.navlink, className)} to='/'><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            </FlexBox>
        </>
    );
}
