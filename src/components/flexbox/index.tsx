import * as React from 'react';
import styles from './index.module.scss';

export interface Props {
    style?:React.CSSProperties;
    children?:React.ReactNode;
}
export default function FlexBox ({ style, children }: Props) {
  return (
    <div style={style} className={styles.flexBox}>
      {children}
    </div>
  );
}
