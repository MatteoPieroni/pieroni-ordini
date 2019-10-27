const headers = new Headers({
  ['API_HEADER']: 'API_KEY'
});

export const sendData = async (numOrdine, codiceFiscale) => {
  const response = await fetch(
    `API_URL?NumOrdine=${numOrdine}&CodiceFiscale=${codiceFiscale}`,
    {
      headers: headers
    }
  );
  const data = await response.json();
  return data;
};
