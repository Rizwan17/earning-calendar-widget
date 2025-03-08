import React, { FC, useEffect, useState } from "react";
import {
  EarningData,
  EarningResponse,
  fetchEarnings,
  Params,
} from "./apis/earningApi";
import { getFormattedCurrentDate, getFormattedDate } from "./utils";
import { FormattedEarningsData, parseEarningsData } from "./helpers";

import styles from "./style.module.css";
import { CalendarColumn } from "./components/CalendarColumn";
import EarningWishpersLogo from "./components/EarningWishperLogo";

interface IProps {
  fromDate: string;
  toDate: string;
}

/**
 * @author
 * @function @EarningWidget
 **/

const EarningWidget: FC<IProps> = ({ fromDate, toDate }) => {
  const [earnings, setEarnings] = useState<FormattedEarningsData>({});

  useEffect(() => {
    const init = async () => {
      const params: Params = {
        from_date: fromDate,
        to_date: toDate,
      };

      const result: EarningResponse = await fetchEarnings(params);
      if (result.error) {
        alert(JSON.stringify(result));
      } else if (result.earnings) {
        console.log(result);

        // setEarnings(result.earnings);
        const formattedEarnings = parseEarningsData(result.earnings);
        setEarnings(formattedEarnings);
      }
    };

    init();
  }, []);

  return (
    <div className={styles.earningWidgetContainer}>
      <div className={styles.earningWidgetHeader}>
        <EarningWishpersLogo />
        <div className={styles.headertitle}>
          <h1>Most Anticipated Earnings Releases</h1>
          <h2>{getFormattedCurrentDate()}</h2>
        </div>
      </div>

      <div className={styles.calendarColumnContainer}>
        {Object.keys(earnings).map((date, index) => (
          <CalendarColumn key={index} date={date} data={earnings[date]} />
        ))}
      </div>
    </div>
  );
};

export default EarningWidget;
