<script>
  import Header from "./components/Header.svelte";
  import Form from "./components/Form.svelte";
  import Items from "./components/Items.svelte";
  export let data = {};

  const showData = event => {
    data = event.detail;
  };

  const resetView = () => {
    data = {};
  };

  data = {
    sezordine: "5",
    numordine: "16770",
    righe: [
      {
        articolo: "605485",
        descrizione: "WALK GRIGIO CHIARO 60X60 GARDENIA",
        stato: "1",
        dataOrdine: "2019-07-23",
        dataConsegna: "2019-08-09"
      },
      {
        articolo: "0034",
        descrizione: "LAVORAZIONE BATTISCOPA 8X60",
        stato: "0",
        dataOrdine: "2019-07-23",
        dataConsegna: "2019-08-09"
      },
      {
        articolo: "181032",
        descrizione: "ATELIER GESSO RETT 20X120 CISA",
        stato: "3",
        dataOrdine: "2019-07-23",
        dataConsegna: "2019-08-09"
      },
      {
        articolo: "168918",
        descrizione: "EMOTION WALL GRIGIO 20X60 LA FENICE",
        stato: "1",
        dataOrdine: "2019-07-23",
        dataConsegna: "2019-08-09"
      },
      {
        articolo: "640563",
        descrizione: "TRAVERTINO LISTELLO GRIGIO 20X45",
        stato: "1",
        dataOrdine: "2019-07-23",
        dataConsegna: "2019-08-09"
      }
    ]
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
