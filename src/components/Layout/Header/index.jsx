import React from 'react';
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import styles from './index.module.scss'

const CommonHeader = () => {
  return (
    <header>
      <span className={styles.title}>Hello Emma!</span>
      <SmileTwoTone style={{ marginRight: 10 }} />
      <HeartTwoTone style={{ marginRight: 10 }} twoToneColor="#eb2f96" />
      <CheckCircleTwoTone twoToneColor="#52c41a" />
    </header>
  );
};

export default CommonHeader;
