export enum EPresetTimes {
  SECOND = 1000,
  MINUTE = SECOND * 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  TEN_DAYS = DAY * 10,
}
export enum CurrenciesEnum {
  USD = "USD",
  RUB = "RUB",
  EUR = "EUR",
  UZS = "UZS",
  CNY = "CNY",
  JPY = "JPY",
  KZT = "KZT",
  TJS = "TJS",
}

export interface CurrenciesTypes {
  base: CurrenciesEnum;
  results: {
    [key: string]: number;
  };
  updated: string;
  ms: number;
}
export interface CunvertTypes {
  base: CurrenciesEnum;
  amount: number;
  result: { [key: string]: number; rate: number };
  ms: number;
}
