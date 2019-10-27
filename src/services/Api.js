import { url, apiKey } from '../apiConstants';

export const sendData = async (numOrdine, codiceFiscale) => {
  let data;

  const response = await fetch(
    `${url}?code=${apiKey}&NumOrdine=${numOrdine}&CodiceFiscale=${codiceFiscale}`
  );

  try {
    console.log(response.body);
    data = JSON.parse(response.body);
  } catch (e) {
    console.log(e);
    data = response;
  }

  return data;
};
