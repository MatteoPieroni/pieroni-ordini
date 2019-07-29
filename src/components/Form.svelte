<script>
  export let codiceFiscaleError = "";
  export let numeroOrdineError = "";

  const handleSubmit = event => {
    const numeroOrdine = event.target["numero-ordine"].value;
    const codiceFiscale = event.target["codice-fiscale"].value;

    if (
      !codiceFiscale.match(
        /^(?:[A-Z][AEIOU][AEIOUX]|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
      )
    ) {
      codiceFiscaleError = "Non un codice fiscale";
      return;
    }

    console.log(numeroOrdine, codiceFiscale);
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="numero-ordine">Numero Ordine</label>
  <input type="number" id="numero-ordine" required />
  <span>{numeroOrdineError}</span>
  <label for="codice-fiscale">Codice Fiscale</label>
  <input type="text" id="codice-fiscale" required />
  <span>{codiceFiscaleError}</span>
  <button type="submit">Cerca il tuo ordine</button>
</form>
