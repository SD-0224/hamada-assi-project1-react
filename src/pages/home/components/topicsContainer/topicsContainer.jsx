import React from "react";
import styles from "./topicsContainer.module.css";
import { LayoutContainer } from "../../../../shared/components/container/container";
import Search from "../search/search";
import { Topics } from "../topics/topics";

export default function TopicsContainer() {
  return (
    <section className={styles.contentContainer}>
      <LayoutContainer>
        <Search></Search>
        <Topics></Topics>
      </LayoutContainer>
    </section>
  );
}
