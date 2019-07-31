var fetch = require('node-fetch');

exports.handler = async event => {
  let response;
  let req;
  const apiUrl = process.env.API_URL;
  const SezOrdine = process.env.SEZ_ORDINE;

  try {
    req = JSON.parse(event.body);
  } catch (e) {
    req = event.body;
  }

  if (!req || !req.NumOrdine || !req.CodiceFiscale) {
    response = {
      statusCode: 401,
      body: JSON.stringify(
        "C'è stato un errore, ricarica la pagina per favore."
      )
    };
  } else {
    let doesOrderExist;
    try {
      doesOrderExist = await fetch(
        `${apiUrl}?cfCliente=${
          req.CodiceFiscale
        }&SezOrdine=${SezOrdine}&NumOrdine=${req.NumOrdine}`
      );
    } catch (e) {
      doesOrderExist = false;
    }

    if (!doesOrderExist) {
      response = {
        statusCode: 401,
        body: JSON.stringify(
          'Non siamo riusciti a trovare ordini con questi dati. Ricontrollali per favore.'
        )
      };
    } else {
      const order = await fetch(
        `${apiUrl}?SezOrdine=${SezOrdine}&NumOrdine=${req.NumOrdine}`
      );

      response = {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    }
  }

  response.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    'Access-Control-Allow-Origin': '*'
  };

  return response;
};
