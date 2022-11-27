export const Const: {[key: string]: any} = {
  COINMARKETCAP: {
    BASE_URL: 'https://pro-api.coinmarketcap.com',
    ENDPOINT: {
      MAP: '/v1/cryptocurrency/map', // 暗号通貨のIDリスト
      PRICE: '/v2/cryptocurrency/quotes/latest', // 最新市場価格（idカンマ区切り指定）
    }
  },
};

/** ログに色をつけて出力 */
const ConsoleReset = '\u001b[0m';
export const ConsoleRed = (...log: any[]) => {
  console.log('\u001b[31m' + log + ConsoleReset);
};
export const ConsoleGreen = (...log: any[]) => {
  console.log('\u001b[32m' + log + ConsoleReset);
};
export const ConsoleYellow = (...log: any[]) => {
  console.log('\u001b[33m' + log + ConsoleReset);
};
export const ConsoleBlue = (...log: any[]) => {
  console.log('\u001b[34m' + log + ConsoleReset);
};
export const ConsoleMagenta = (...log: any[]) => {
  console.log('\u001b[35m' + log + ConsoleReset);
};
export const ConsoleCyan = (...log: any[]) => {
  console.log('\u001b[36m' + log + ConsoleReset);
};