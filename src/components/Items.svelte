<script>
  import SingleItem from "./SingleItem.svelte";
  export let orderData;
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    margin: 0 auto;
    max-width: 1200px;
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
  {#each orderData.righe as item}
    <li class="item" id="item">
      <SingleItem orderItem={item} />
    </li>
  {/each}
</ul>
