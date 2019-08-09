<script>
  import { fly } from "svelte/transition";
  import SingleItem from "./SingleItem.svelte";
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
    width: 90vw;
    background: #fff;
    box-shadow: 0 1px 10px -6px rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1200px) {
    .container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>

<ul class="container">
  {#each orderData.righe as item, index}
    <li
      class="item"
      transition:fly={{ x: 200, duration: 300, delay: 100 * index }}>
      <SingleItem orderItem={item} />
    </li>
  {/each}
</ul>
