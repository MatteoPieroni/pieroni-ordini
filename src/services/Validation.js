import { errors } from '../constants.js';

const noEmptyFields = (field, value) => {
  if (!value.replace(' ', '').length > 0) return errors[field].empty;

  return '';
};

export const validateCodiceFiscale = value => {
  let error = '';
  error = noEmptyFields('codiceFiscale', value);

  if (
    !error.length > 0 &&
    !value.match(
      /^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
    )
  )
    error = errors.codiceFiscale.nonValid;

  return error;
};

export const validateField = (field, value) => {
  let error;

  switch (field) {
    case 'codiceFiscale':
      error = validateCodiceFiscale(value);
      break;
    default:
      error = noEmptyFields(field, value);
  }

  return error;
};
