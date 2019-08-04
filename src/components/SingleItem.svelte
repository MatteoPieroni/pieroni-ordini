<script>
  import Statuses from "./Statuses.svelte";
  export let orderItem;

  const { articolo, descrizione, stato, dataOrdine, dataConsegna } = orderItem;

  /*"articolo": "605485",
            "descrizione": "WALK GRIGIO CHIARO 60X60 GARDENIA",
            "stato": "1",
            "dataOrdine": "2019-07-23",
            "dataConsegna": "2019-08-09"
*/
</script>

<style>
  .card {
    box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.5);
  }

  .header {
    padding: 1rem;
  }

  h3 {
    margin: 0;
  }
</style>

<div class="card">
  <div class="header">
    <h3>{descrizione}</h3>
    <p>#{articolo}</p>
    <p>{dataConsegna}</p>
  </div>
  <Statuses currentStatus={stato} />
</div>
