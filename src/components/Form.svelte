<script>
  import { fields } from "../constants.js";
  import { sendData } from "../services/Api.js";
  import { validateField } from "../services/Validation.js";

  export let formFields = fields;

  const initialUiErrors = {
    numeroOrdine: "",
    codiceFiscale: "",
    general: ""
  };

  export let data = {};
  export let uiErrors = {
    ...initialUiErrors
  };
  export let isValid = true;
  export let isLoading = false;

  const mapFieldToErrors = (field, error) => {
    uiErrors = {
      ...uiErrors,
      [field]: error
    };
  };

  const handleSubmit = async event => {
    isValid = true;
    const formFields = event.target.elements;
    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].tagName === "INPUT")
        mapFieldToErrors(
          formFields[i].id,
          validateField(formFields[i].id, formFields[i].value)
        );
    }

    Object.keys(uiErrors).forEach(key => {
      if (uiErrors[key] !== "") isValid = false;
    });

    if (!isValid) return;

    isLoading = true;
    try {
      data = await sendData(numeroOrdine, codiceFiscale);
    } catch (e) {
      console.log(e);

      mapFieldToErrors("general", errors.general);
    }
    isLoading = false;

    console.log(data);
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
  <h2>Controlla lo stato del tuo ordine</h2>
  <p>
    Inserisci i dati del tuo ordine nel form per visualizzare lo stato dei
    singoli componenti
  </p>
  <label for={formFields.numeroOrdine}>Numero Ordine</label>
  <input
    type="text"
    id={formFields.numeroOrdine}
    on:input={handleChange}
    on:change={handleBlur} />
  <p>{uiErrors.numeroOrdine}</p>
  <label for={formFields.codiceFiscale}>Codice Fiscale</label>
  <input
    type="text"
    id={formFields.codiceFiscale}
    on:input={handleChange}
    on:change={handleBlur} />
  <p>{uiErrors.codiceFiscale}</p>
  {#if isLoading}
    <p>Stiamo cercando...</p>
  {:else}
    <button type="submit">Cerca il tuo ordine</button>
  {/if}
  <p aria-live="polite">{uiErrors.general}</p>
</form>
