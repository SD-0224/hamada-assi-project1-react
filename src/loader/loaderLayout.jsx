import React from 'react'
import CardLoader from './cardLoader'
import styles from "./loader.module.css";

export default function LoaderLayout() {
  return (
    <div className={styles.grid}>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </div>
  )
}
