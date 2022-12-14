import { ConsoleCyan, Const } from '../../../const';
import { Env } from '../../../env';

export async function getPrice(
  id_list: number[],
) {
  const api_url = Const.COINMARKETCAP.BASE_URL + Const.COINMARKETCAP.ENDPOINT.PRICE + `?id=${id_list.join(',')}` + '&convert=JPY';

  const res = await fetch(api_url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': Env.COINMARKETCAP_API_KEY,
    },
  });

  const json = await res.json();
  ConsoleCyan(JSON.stringify(json));
  return json;
}