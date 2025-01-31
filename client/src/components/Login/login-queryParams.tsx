const baseUrl = 'https://accounts.spotify.com/authorize';

interface QueryParams {
  client_id: string;
  response_type: string;
  redirect_uri: string;
  state: string;
  scope: string;
}

const queryParams: QueryParams = {
  client_id: 'd49ee10b034843b1aabd579ac1901e42',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/main',
  state: 'bayburt',
  // scope: 'user-library-read user-follow-modify'
  scope:
    'user-library-read user-follow-read user-follow-modify playlist-modify-public',
};

function buildQueryUrl(url: string, params: QueryParams): string {
  return `${baseUrl}?client_id=${params.client_id}&response_type=${
    params.response_type
  }&redirect_uri=${params.redirect_uri}&scope=${encodeURIComponent(
    queryParams.scope
  )}&state=${params.state}`;
}

const queryUrl = buildQueryUrl(baseUrl, queryParams);

export { queryUrl };
