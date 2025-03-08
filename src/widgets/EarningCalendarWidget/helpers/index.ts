import { EarningData } from "../apis/earningApi";

export interface FormattedEarningsData {
  [key: string]: FormattedEarning
}

export interface FormattedEarning {
  before_open: EarningData[],
  after_close: EarningData[]
}

export const parseEarningsData = (earnings: EarningData[]): FormattedEarningsData => {
  const formattedEarnings: any = {};
  earnings.forEach((earning: EarningData, index: number) => {
    const { date, time } = earning;
    if (!formattedEarnings[date]) {
      formattedEarnings[date] = {
        before_open: [],
        after_close: [],
      };
    }

    if (time < "16:00:00") {
      formattedEarnings[date].before_open.push(earning);
    } else {
      formattedEarnings[date].after_close.push(earning);
    }

  });

  const sortedEarnings = Object.keys(formattedEarnings).sort().reduce((acc, key) => {
    acc[key] = formattedEarnings[key];
    return acc;
  }, {} as FormattedEarningsData);

  return sortedEarnings;
};
