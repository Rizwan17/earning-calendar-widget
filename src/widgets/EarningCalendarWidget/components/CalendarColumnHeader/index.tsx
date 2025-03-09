import React, { FC } from "react";
import styles from "./style.module.css";
import { getDayName } from "../../utils";

interface IProps {
  date: string;
}

/**
 * @author
 * @function @CalendarColumnHeader
 **/

export const CalendarColumnHeader: FC<IProps> = ({ date }) => {
  return (
    <div className={styles.columnHeaderContainer}>
      <p className={styles.day}>{getDayName(date)}</p>
      <div className={styles.openClose}>
        <p>Before Open</p>
        <p>After Close</p>
      </div>
    </div>
  );
};
