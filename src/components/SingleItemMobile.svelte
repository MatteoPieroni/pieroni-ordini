<script>
  import { formatDate } from "../services/Dates";
  import StatusesMobile from "./StatusesMobile.svelte";
  export let wrapperClass;
  export let orderItem;

  const { articolo, descrizione, stato, dataOrdine, dataConsegna } = orderItem;
  const descrizioneLowerCase = descrizione.toLowerCase();
  const formattedDate = formatDate(dataConsegna);
</script>

<style type="text/scss">
  .card {
    display: block;
    border-radius: 3px;
    box-shadow: 0px 1px 10px -6px rgba(0, 0, 0, 0.5);
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .header {
    border-bottom: 1px solid rgba(227, 227, 227, 0.77);
    padding: 1rem;
  }

  .title {
    margin: 0;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

  .article-number {
    position: absolute;
    top: -7px;
    right: 5px;
    margin: 0;
    border-radius: 3px;
    padding: 0 0.2rem;
    background: #4c78b7;
    color: #fff;
  }

  .delivery-date {
    margin-bottom: 0;
  }
</style>

<div class={`card ${wrapperClass ? wrapperClass : ''}`}>
  <div class="header">
    <h3 class="title">{descrizioneLowerCase}</h3>
    <p class="article-number">#{articolo}</p>
    <p class="delivery-date">
      Consegna prevista
      <strong>{formattedDate}</strong>
    </p>
  </div>
  <StatusesMobile currentStatus={stato} />
</div>
