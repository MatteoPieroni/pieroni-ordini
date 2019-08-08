export const fields = {
  numeroOrdine: 'numeroOrdine',
  codiceFiscale: 'codiceFiscale'
};

export const errors = {
  numeroOrdine: {
    empty: 'Inserisci il numero del tuo ordine, per favore'
  },
  codiceFiscale: {
    empty:
      'Inserisci il codice fiscale con cui hai effettuato il tuo ordine, per favore',
    nonValid: 'Non riconosciamo questo codice fiscale, ricontrollalo per favore'
  },
  general: "C'è stato un errore, ricarica la pagina per favore."
};

export const statuses = {
  0: 'Da Ordinare al Fornitore',
  1: 'Ordinato al Fornitore',
  2: 'Arrivato al nostro Magazzino',
  3: 'In Preparazione',
  4: 'In Consegna'
};
