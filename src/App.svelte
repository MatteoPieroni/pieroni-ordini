<script>
  import Header from "./components/Header.svelte";
  import Form from "./components/Form.svelte";
  import Items from "./components/Items.svelte";
  export let data = {};

  const showData = event => {
    data = event.detail && event.detail.order;
  };

  const resetView = () => {
    data = {};
  };
</script>

<style type="text/scss">
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap");
  :global(body) {
    padding-bottom: 2rem;
    min-height: 100vh;
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
    font-family: "Source Sans Pro", HelveticaNeue-Light, "Helvetica Neue Light",
      "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 400;
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: 300;
  }
  :global(ul) {
    list-style: none;
    padding: 0;
  }

  main {
    position: relative;
    margin: 0 auto;
    border-radius: 3px;
    padding: 0;
    overflow-x: hidden;

    @media (min-width: 768px) {
    }
  }

  .form-container {
    position: relative;
    margin: 0 auto 0 auto;
    padding: 2rem 0 0;
    width: 90vw;
    box-sizing: border-box;

    @media (min-width: 768px) {
      max-width: 920px;
    }
  }

  .data-container {
    margin: 0 auto 2rem auto;
    width: 90vw;
    box-sizing: border-box;

    @media (min-width: 768px) {
      max-width: 920px;
    }
  }
</style>

<svelte:head>
  <title>Stato Ordine - Pieroni srl</title>
  <link rel="shortlink" href="https://ordini.pieroni.it/" />
  <!-- Icons & Favicons -->
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="https://ordini.pieroni.it/apple-touch-icon-57x57.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="https://ordini.pieroni.it/apple-touch-icon-60x60.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="https://ordini.pieroni.it/apple-touch-icon-72x72.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="https://ordini.pieroni.it/apple-touch-icon-76x76.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="https://ordini.pieroni.it/apple-touch-icon-114x114.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="https://ordini.pieroni.it/apple-touch-icon-120x120.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="https://ordini.pieroni.it/apple-touch-icon-144x144.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="https://ordini.pieroni.it/apple-touch-icon-152x152.png?v=kPPr57pW7z" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://ordini.pieroni.it/apple-touch-icon-180x180.png?v=kPPr57pW7z" />
  <link
    rel="icon"
    type="image/png"
    href="https://ordini.pieroni.it/favicon-32x32.png?v=kPPr57pW7z"
    sizes="32x32" />
  <link
    rel="icon"
    type="image/png"
    href="https://ordini.pieroni.it/favicon-194x194.png?v=kPPr57pW7z"
    sizes="194x194" />
  <link
    rel="icon"
    type="image/png"
    href="https://ordini.pieroni.it/favicon-96x96.png?v=kPPr57pW7z"
    sizes="96x96" />
  <link
    rel="icon"
    type="image/png"
    href="https://ordini.pieroni.it/android-chrome-192x192.png?v=kPPr57pW7z"
    sizes="192x192" />
  <link
    rel="icon"
    type="image/png"
    href="https://ordini.pieroni.it/favicon-16x16.png?v=kPPr57pW7z"
    sizes="16x16" />
  <link
    rel="manifest"
    href="https://ordini.pieroni.it/manifest.json?v=kPPr57pW7z" />
  <link
    rel="mask-icon"
    href="https://ordini.pieroni.it/safari-pinned-tab.svg?v=kPPr57pW7z"
    color="#ee8900" />
  <link
    rel="shortcut icon"
    href="https://ordini.pieroni.it/favicon.ico?v=kPPr57pW7z" />
  <meta name="apple-mobile-web-app-title" content="Pieroni srl" />
  <meta name="application-name" content="Pieroni srl" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta
    name="msapplication-TileImage"
    content="https://ordini.pieroni.it/mstile-144x144.png?v=kPPr57pW7z" />
  <meta name="theme-color" content="#ffffff" />
  <!--[if IE]>
    <link rel="shortcut icon" href="https://ordini.pieroni.it/favicon.ico">
  <![endif]-->
  <meta name="msapplication-TileColor" content="#f01d4f" />
  <meta name="theme-color" content="#0065A1" />
</svelte:head>

<main class={data && data.righe ? 'order-open' : ''}>
  <Header />
  <section class="form-container">
    <Form
      on:formSubmitted={showData}
      numOrdine={data && data.numordine}
      on:resetOrder={resetView} />
  </section>
  {#if data && data.righe}
    <section class="data-container">
      <Items orderData={data} />
    </section>
  {/if}
</main>
