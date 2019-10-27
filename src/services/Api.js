const headers = new Headers({
  [`${API_HEADER}`]: API_KEY
});

export const sendData = async (numOrdine, codiceFiscale) => {
  let data;

  const response = await fetch(
    `${API_URL}?NumOrdine=${numOrdine}&CodiceFiscale=${codiceFiscale}`,
    {
      headers: headers
    }
  );

  try {
    data = await response.json();
  } catch (e) {
    console.log(e);
    data = response;
  }

  return data;
};
