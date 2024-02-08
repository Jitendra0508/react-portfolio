import clsx from 'clsx';
import * as React from 'react';
import style from './index.module.scss';

export interface Props {
    heading?: string;
    className?: string;
}

export default function Heading({ heading, className }: Props) {
    return (
        <h2 className={clsx(style.bannerTitle, className)}>{heading}</h2>
    );
}
