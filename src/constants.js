export const fields = {
  numeroOrdine: 'numeroOrdine',
  codiceFiscale: 'codiceFiscale'
};

export const errors = {
  numeroOrdine: {
    empty: 'Inserisci il numero del tuo ordine, per favore'
  },
  codiceFiscale: {
    empty: 'Non riconosciamo questo codice fiscale, ricontrollalo per favore',
    nonValid:
      'Inserisci il codice fiscale con cui hai effettuato il tuo ordine, per favore'
  },
  general: "C'è stato un errore, ricarica la pagina per favore."
};
