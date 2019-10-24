<script>
  import Logo from "./Logo.svelte";
</script>

<style type="text/scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem;
    background: #182c66;
    @media (min-width: 768px) {
      padding: 1rem 2rem;
    }
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 768px) {
      width: auto;
    }
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
</style>

<header>
  <Logo />
  <h1>Il tuo ordine Pieroni</h1>
</header>
