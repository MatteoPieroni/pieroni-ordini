<script>
  import Statuses from "./Statuses.svelte";
  export let orderItem;

  const { articolo, descrizione, stato, dataOrdine, dataConsegna } = orderItem;
  const descrizioneLowerCase = descrizione.toLowerCase();
</script>

<style>
  .card {
    border-radius: 3px;
    box-shadow: 0px 1px 10px -6px rgba(0, 0, 0, 0.5);
  }

  .header {
    border-bottom: 1px solid rgba(227, 227, 227, 0.77);
    padding: 1rem;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
  }
</style>

<div class="card">
  <div class="header">
    <h3 class="title">{descrizioneLowerCase}</h3>
    <p>#{articolo}</p>
    <p>{dataConsegna}</p>
  </div>
  <Statuses currentStatus={stato} />
</div>
