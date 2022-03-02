import nextConfig from '../next.config';

export const fetchPlayersData = async () => {
  const API_ENDPOINT = `${nextConfig.env.API_HOST_NAME}` + '/v1/players';
  const res = await fetch(API_ENDPOINT, { method: "GET" });
  const data = await res.json();

  return data;
}
