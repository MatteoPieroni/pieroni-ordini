<script>
  import Truck from "./Truck.svelte";
  import { createEventDispatcher } from "svelte";
  import { fields, errors } from "../constants.js";
  import { sendData } from "../services/Api.js";
  import { validateField } from "../services/Validation.js";

  export let numOrdine;

  let formFields = fields;
  const dispatch = createEventDispatcher();

  const initialUiErrors = {
    numeroOrdine: "",
    codiceFiscale: "",
    general: ""
  };

  let data = {};
  let uiErrors = {
    ...initialUiErrors
  };
  let isValid = true;
  let isLoading = false;

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
      data = await sendData(formFields[0].value, formFields[1].value);
      dispatch("formSubmitted", data);
    } catch (e) {
      console.log(e);
      mapFieldToErrors("general", errors.general);
    }
    isLoading = false;
  };

  const handleChange = event => {
    mapFieldToErrors(event.target.id, "");
  };

  const handleNumberChange = event => {
    const { value } = event.target;
    mapFieldToErrors(event.target.id, "");
    const nonDigitCharacters = new RegExp(/\D/g);
    const sanitisedValue = value.replace(nonDigitCharacters, "");
    event.target.value = sanitisedValue;
  };

  const handleBlur = event => {
    mapFieldToErrors(
      event.target.id,
      validateField(event.target.id, event.target.value)
    );
  };

  const resetOrder = () => {
    dispatch("resetOrder", {});
  };
</script>

<style type="text/scss">
  .sub-header {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      padding: 2rem 0;
    }
  }
  h2 {
    margin-top: 0;
  }

  .truck {
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      margin-left: 5%;
      width: 35%;
    }
  }

  .form {
    color: #fff;
    @media (min-width: 768px) {
      width: 60%;
    }
  }

  form {
    padding: 1rem;
    background: #fff;
    color: #000;
  }

  .input-container {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
  }

  .error {
    margin: 0;
    color: #ba0c0c;
  }

  button[type="submit"] {
    border: none;
    padding-top: 0.618047em;
    padding-right: 1.41575em;
    padding-bottom: 0.618047em;
    padding-left: 1.41575em;
    font-size: 1.3em;
    text-transform: uppercase;
    background: #febc1f;
    color: #333;
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    -webkit-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background: #ee8900;
    color: #fff;
  }

  .reset-container {
    padding: 1rem 0;
  }

  .order-number {
    margin-bottom: 0;
  }

  .reset-button {
    border: none;
    padding-left: 0;
    background: none;
    color: #fff;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
  }

  .reset-button:hover {
    color: #286090;
  }
</style>

<div class="sub-header">
  <div class="truck">
    <Truck />
  </div>
  <div class="form">
    {#if !numOrdine}
      <form on:submit|preventDefault={handleSubmit}>
        <h2>Controlla lo stato del tuo ordine</h2>
        <p>
          Inserisci i dati del tuo ordine nel form per visualizzare lo stato dei
          singoli componenti
        </p>
        <div class="input-container">
          <label for={formFields.numeroOrdine}>Numero Ordine</label>
          <input
            type="text"
            id={formFields.numeroOrdine}
            on:input={handleNumberChange}
            on:change={handleBlur} />
          <p class="error" aria-live="polite">{uiErrors.numeroOrdine}</p>
        </div>
        <div class="input-container">
          <label for={formFields.codiceFiscale}>Codice Fiscale</label>
          <input
            type="text"
            id={formFields.codiceFiscale}
            on:input={handleChange}
            on:change={handleBlur} />
          <p class="error" aria-live="polite">{uiErrors.codiceFiscale}</p>
        </div>
        {#if isLoading}
          <p aria-live="polite">Stiamo cercando...</p>
        {:else}
          <button type="submit">Cerca il tuo ordine</button>
        {/if}
        <p aria-live="polite">{uiErrors.general}</p>
      </form>
    {:else}
      <div class="reset-container">
        <h2 class="order-number">Ordine #{numOrdine}</h2>
        <button class="reset-button" on:click={resetOrder} aria-label="">
          Cerca un altro ordine
        </button>
      </div>
    {/if}
  </div>
</div>
