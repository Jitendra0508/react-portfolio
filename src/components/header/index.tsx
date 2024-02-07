import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialMedia from '../socialMedia';
import FlexBox from '../flexbox';
import style from './index.module.scss';
import Logo from '../Logo/logo';
export default function Header() {
    const navlink = [
        {
            link: 'Home',
            to: '/'
        },
        {
            link: 'About',
            to: '/about'
        },
        {
            link: 'What I do',
            to: '/what-do'
        },
        {
            link: 'My Resume',
            to: '/resume'
        },
        {
            link: 'Portfolio',
            to: '/portfolio'
        },
        {
            link: 'Contact',
            to: '/contact'
        },

    ]
    return (
        <header className={style.header}>
            <div className='container'>
                <FlexBox style={{ justifyContent: 'space-between' }}>
                  <Logo/>
                    <nav className={style.navigation}>
                        <ul>
                            {
                                navlink.map((item, i) => {
                                    return (
                                        <>
                                            <NavLink   key={i} to={item.to}>{item.link}</NavLink>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <SocialMedia />
                </FlexBox>
            </div>
        </header>
    );
}
