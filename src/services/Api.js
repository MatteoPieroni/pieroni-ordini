import { url, apiKey } from '../apiConstants';

export const sendData = async (numOrdine, codiceFiscale) => {
  let data;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey
    },
    body: JSON.stringify({ NumOrdine: numOrdine, CodiceFiscale: codiceFiscale })
  });

  try {
    data = await response.json();
  } catch (e) {
    console.log(e);
    data = response;
  }

  return data;
};
