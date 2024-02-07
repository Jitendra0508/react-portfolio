import clsx from 'clsx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export interface Props {
    src?: string | undefined;
    alt?: string;
    className?:string;
    style?:React.CSSProperties;
}
export default function Logo(props: Props) {
    const { src, alt, className,style } = props
   
    return (
        <>
            {/* <img src={src} alt={alt} /> */}
            <div><Link style={style} className={clsx(className, styles.logo)} to='/'>CREATIVE TEAM</Link></div>

        </>
    );
}
