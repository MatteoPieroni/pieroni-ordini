<script>
  import Truck from "./Truck.svelte";
</script>

<style type="text/scss">
  header {
    padding: 1rem;
    background: #182c66;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
  .sub-header {
    background: rgba(76, 120, 183, 1);
    background: -o-radial-gradient(
      50.7% 60.5%,
      circle 760px,
      rgba(76, 120, 183, 1) 0%,
      rgba(34, 70, 122, 1) 90%
    );
    background: radial-gradient(
      circle 760px at 50.7% 60.5%,
      rgba(76, 120, 183, 1) 0%,
      rgba(34, 70, 122, 1) 90%
    );
    padding: 2rem 0;
  }
</style>

<header>

  <h1>Il tuo ordine Pieroni</h1>
</header>
<div class="sub-header">
  <Truck />

</div>
