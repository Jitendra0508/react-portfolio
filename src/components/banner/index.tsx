import * as React from 'react';
import style from './index.module.scss';
import clsx from 'clsx';

export interface IAppProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Banner({ children, className }: IAppProps) {
    return (
        <div className={clsx(style.banner,className)}>
            <div className='container'>
                <div className={style.bannerText}>
                    {children}
                </div>
            </div>
        </div>
    );
}
