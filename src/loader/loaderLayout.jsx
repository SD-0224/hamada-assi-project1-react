import React from 'react'
import MyLoader from './MyLoader'
import styles from "./loader.module.css";

export default function LoaderLayout() {
  return (
    <div className={styles.grid}>
      <MyLoader />
      <MyLoader />
      <MyLoader />
      <MyLoader />
    </div>
  )
}
