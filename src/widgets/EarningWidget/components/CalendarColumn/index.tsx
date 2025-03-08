import React, { FC, useEffect, useState } from "react";
import styles from "./style.module.css";
import { EarningData } from "../../apis/earningApi";
import { fetchLogo } from "../../apis/logoApi";
import { getDayName } from "../../utils";
import { FormattedEarning } from "../../helpers";

interface IProps {
  date: string;
  data: FormattedEarning;
}

/**
 * @author
 * @function @CalendarColumn
 **/

export const CalendarColumn: FC<IProps> = ({ date, data }) => {
  return (
    <div className={styles.columnWrapper}>
      <header className={styles.columnHeader}>
        <h3>{getDayName(date)}</h3>
        <div className={styles.columnHeader2}>
          <h4>Before Open</h4>
          <h4>After Close</h4>
        </div>
      </header>
      <section className={styles.columnContainer}>
        {/* before open column */}
        <section>
          {data.before_open.map((earning: EarningData, index: number) => (
            <CalendarCell logo={earning.ticker} ticker={earning.ticker} />
          ))}
        </section>

        {/* after close column */}
        <section>
          {data.after_close.map((earning: EarningData, index: number) => (
            <CalendarCell logo={earning.ticker} ticker={earning.ticker} />
          ))}
        </section>
      </section>
    </div>
  );
};

const CalendarCell: FC<{ logo: string; ticker: string }> = ({
  logo,
  ticker,
}) => {
  const [logoUrl, setLogoUrl] = useState<string>("");

  useEffect(() => {
    fetchLogo(logo).then((result) => {
      if (result.data) {
        setLogoUrl(result.data[0].files.mark_vector_light || "");
      }
    });
  }, []);

  return (
    <a target="_blank" href={`https://www.benzinga.com/quote/${ticker}`}>
      <div className={styles.calendarCell}>
        <span className={styles.tickerText}>{ticker}</span>
        <img src={logoUrl} className={styles.logo} />
      </div>
    </a>
  );
};
