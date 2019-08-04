<script>
  import Form from "./components/Form.svelte";
  import Items from "./components/Items.svelte";
  export let data = {};

  const showData = event => {
    data = event.detail;
  };

  const resetView = () => {
    data = {};
  };
</script>

<style>
  h1 {
    color: purple;
  }
  :global(ul) {
    list-style: none;
    padding: 0;
  }
</style>

<h1>Il tuo ordine Pieroni</h1>
<Form
  on:formSubmitted={showData}
  isOrderShown={data && data.righe}
  on:resetOrder={resetView} />
{#if data && data.righe}
  <Items orderData={data} />
{/if}
