import * as React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

export interface Props {
    style?:React.CSSProperties;
    children?:React.ReactNode;
    className?:string
}
export default function FlexBox ({ style, children,className }: Props) {
  return (
    <div style={style} className={clsx(styles.flexBox,className)}>
      {children}
    </div>
  );
}
