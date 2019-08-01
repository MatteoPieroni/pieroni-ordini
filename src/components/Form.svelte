<script>
  import { sendData } from "../services/Api.js";
  import {
    validateOrderNumber,
    validateField
  } from "../services/Validation.js";

  const initialUiErrors = {
    numeroOrdine: "",
    codiceFiscale: ""
  };

  export let uiErrors = {
    ...initialUiErrors
  };

  export let isValid = true;

  const mapFieldToErrors = (field, error) => {
    uiErrors = {
      ...uiErrors,
      [field]: error
    };
  };

  const handleSubmit = async event => {
    isValid = true;
    const numeroOrdine = event.target["numeroOrdine"].value;
    const codiceFiscale = event.target["codiceFiscale"].value;

    mapFieldToErrors(
      "numeroOrdine",
      validateField("numeroOrdine", numeroOrdine)
    );

    mapFieldToErrors(
      "codiceFiscale",
      validateField("codiceFiscale", codiceFiscale)
    );

    Object.keys(uiErrors).forEach(key => {
      if (uiErrors[key] !== "") isValid = false;
    });

    if (!isValid) return;

    const datiOrdini = await sendData(numeroOrdine, codiceFiscale);

    console.log(datiOrdini);
  };

  const handleChange = event => {
    mapFieldToErrors(event.target.id, "");
  };

  const handleBlur = event => {
    mapFieldToErrors(
      event.target.id,
      validateField(event.target.id, event.target.value)
    );
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="numero-ordine">Numero Ordine</label>
  <input
    type="text"
    id="numeroOrdine"
    on:input={handleChange}
    on:change={handleBlur} />
  <span>{uiErrors.numeroOrdine}</span>
  <label for="codice-fiscale">Codice Fiscale</label>
  <input
    type="text"
    id="codiceFiscale"
    on:input={handleChange}
    on:change={handleBlur} />
  <span>{uiErrors.codiceFiscale}</span>
  <button type="submit">Cerca il tuo ordine</button>
</form>
