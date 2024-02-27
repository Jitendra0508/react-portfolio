import * as React from 'react';
import style from './index.module.scss';
export interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
    color?: "primary" | "secondary";
    disabled?: boolean;
    innnerText?: string;
}
export default function Button(props: Props) {
    const { onClick, children, color, disabled, innnerText } = props;
    return (
        <>
            <button className={style.button} onClick={onClick} color={color} disabled={disabled} ><span className={style.childSpan}>{children}</span><span className={style.childSecChild}>{innnerText}</span></button>
        </>
    );
}
