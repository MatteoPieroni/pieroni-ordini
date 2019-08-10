<script>
  import { fly } from "svelte/transition";
  import { statuses } from "../constants.js";
  import SingleItemMobile from "./SingleItemMobile.svelte";
  import SingleItemDesktop from "./SingleItemDesktop.svelte";
  export let orderData;
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
  }

  .item {
    position: relative;
    margin: 0rem auto 0 auto;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 10px -6px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }

  .desktop-only {
    display: none;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
    }

    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: block;
    }
  }
</style>

<ul class="container mobile-only">
  {#each orderData.righe as item, index}
    <li
      class="item"
      transition:fly={{ x: 200, duration: 300, delay: 100 * index }}>
      <SingleItemMobile orderItem={item} />
    </li>
  {/each}
</ul>
<table class="desktop-only">
  <tr>
    <th>Descrizione</th>
    <th>Articolo</th>
    <th>Consegna Prevista</th>

    {#each Object.keys(statuses) as statusId}
      <th>{statuses[statusId]}</th>
    {/each}
  </tr>
  {#each orderData.righe as item, index}
    <SingleItemDesktop orderItem={item} />
  {/each}
</table>
