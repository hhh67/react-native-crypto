import { Const } from '../../../const';
import { Env } from '../../../env';

export async function getMap (
  limit: number,
  listing_status?: 'active'|'inactive'|'untracked',
  start?: number,
  sort?: 'id'|'cmc_rank',
) {
  const api_url = Const.COINMARKETCAP.BASE_URL + Const.COINMARKETCAP.ENDPOINT.MAP
    + `?limit=${limit.toString()}`
    + (listing_status !== undefined ? `&listing_status=${listing_status}`: '')
    + (start !== undefined ? `&start=${start?.toString()}` : '')
    + (sort !== undefined ? `&sort=${sort}` : '');

  const res = await fetch(api_url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': Env.COINMARKETCAP_API_KEY,
    },
  });
  
  const json = await res.json();
  return json;
}