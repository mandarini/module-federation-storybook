import styles from './aa.module.css';

/* eslint-disable-next-line */
export interface AaProps {}

export function Aa(props: AaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Aa!</h1>
    </div>
  );
}

export default Aa;
