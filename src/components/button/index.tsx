import * as React from 'react';
import style from './index.module.scss';
export interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
    color?: "primary" | "secondary";
    disabled?: boolean;
}
export default function Button(props: Props) {
    const { onClick, children, color, disabled } = props;
    return (
        <>
            <button className={style.button} onClick={onClick} color={color} disabled={disabled} >{children}</button>
        </>
    );
}
