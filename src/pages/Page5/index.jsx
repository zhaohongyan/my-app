import React from 'react'
import styles from './index.module.less';

function Page5 () {
  console.log('page5')

  return (
    <div>
      <h1>Page5</h1>
      <div className={styles.box}>
        css module
        <span>css module</span>
      </div>
    </div>
  );
}

export default Page5;
