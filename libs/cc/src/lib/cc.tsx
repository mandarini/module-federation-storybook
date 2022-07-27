import styles from './cc.module.css';

/* eslint-disable-next-line */
export interface CcProps {}

export function Cc(props: CcProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cc!</h1>
    </div>
  );
}

export default Cc;
