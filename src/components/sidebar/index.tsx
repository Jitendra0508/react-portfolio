import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FlexBox from '../flexbox';
import style from './index.module.scss';
import Button from '../button';


export default function Sidebar() {
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
        <>
            <div className={style.sidebar}>
                <div className={style.innerSidebar}>
                    <FlexBox style={{ flexDirection: 'column', justifyContent: "space-around", height: '100vh' }}>
                        <div className={style.profile}>
                            <span><b>Team</b></span>
                        </div>
                        <nav className={style.navigation}>
                            <ul>
                                {
                                    navlink.map((item, i) => {
                                        return (
                                            <>
                                                <NavLink key={i} to={item.to}>{item.link}</NavLink>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <Button color='primary'>Contact</Button>
                    </FlexBox>
                </div>
            </div>
        </>

    );
}
