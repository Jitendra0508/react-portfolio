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
            to: '/'
        },
        {
            link: 'About',
            to: '/about',
            icon: 'icons',
            sum: [
                {
                    link: 'About inner',
                    to: '/about-inner',
                },
                {
                    link: 'contact inner',
                    to: '/contact-inner',
                },
            ]

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
                                                <li key={i} className={style.innerMenu}>
                                                    {/* <NavLink to={item.to}>{item.link} <span onClick={addEvent}>{item.icon}</span></NavLink> */}
                                                    <SlideToggle
                                                        trigger={<NavLink to={item.to}>{item.link} <span>{item.icon}</span></NavLink>}
                                                        easing="easeOutQuad"
                                                        duration={1000}
                                                        expanded={false}
                                                    >
                                                        {
                                                            item.sum?.map((item, i) => {
                                                                return (
                                                                    <>
                                                                        <li key={i}>

                                                                            < NavLink to={item.to}>{item.link}</NavLink>
                                                                        </li >

                                                                    </>
                                                                )
                                                            })
                                                        }

                                                    </SlideToggle>
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
