import CONFIG from '../config';

export const getDatas = async (page = 1) => {
  const URL = `${CONFIG.URL}?_page=${page}&_sort=id&_order=desc`;
  const response = await fetch(URL);
  const headers = response.headers;
  const totalList = headers.get('x-total-count') | 0;
  const jsonData = await response.json();
  return {'total': totalList, 'data': jsonData};
};

export const setDatas = async (data) => {
  const response = await fetch(CONFIG.URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json'
    },
    mode:'cors'
  });

  return await response.json();
};