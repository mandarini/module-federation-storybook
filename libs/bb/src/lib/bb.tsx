import styles from './bb.module.css';

/* eslint-disable-next-line */
export interface BbProps {}

export function Bb(props: BbProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Bb!</h1>
    </div>
  );
}

export default Bb;
