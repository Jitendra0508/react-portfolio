import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FlexBox from '../flexbox';
import style from './index.module.scss';
import Button from '../button';
import { SlideToggle } from 'react-smooth-slide-toggle';


export default function Sidebar() {
    const [active, setActive] = React.useState(true);

    const addEvent = () => {
        setActive(current => !current);
    }
    const navlink = [
        {
            link: 'Home',
            icon: <i className="bi bi-house-door"></i>,
            to: '/'
        },
        {
            link: 'About',
            icon: <i className="bi bi-people-fill"></i>,
            to: '/about',
        },
        {
            link: 'What I do',
            icon: <i className="bi bi-card-checklist"></i>,
            to: '/what-do'
        },
        {
            link: 'My Resume',
            icon: <i className="bi bi-box-seam-fill"></i>,
            to: '/resume'
        },
        {
            link: 'Portfolio',
            icon: <i className="bi bi-ui-checks-grid"></i>,
            to: '/portfolio'
        },
        {
            link: 'Contact',
            icon: <i className="bi bi-person-rolodex"></i>,
            to: '/contact'
        },

    ]
    return (
        <>
            <div className={style.sidebar}>
                <div className={style.innerSidebar}>
                    <FlexBox style={{ flexDirection: 'column', justifyContent: "space-around" }}>
                        <div className={style.profile}>
                            <span><b>Team</b></span>
                        </div>
                        <nav className={style.navigation}>
                            <ul>
                                {
                                    navlink.map((item, i) => {
                                        return (
                                            <>
                                                <li key={i} className={style.innerMenu}>
                                                    <NavLink to={item.to}><span style={{ display: 'none' }}>{item.link}</span>{item.icon}</NavLink>
                                                </li >
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        <Button color='primary'>Contact</Button>
                    </FlexBox>
                </div>
            </div >
        </>

    );
}
