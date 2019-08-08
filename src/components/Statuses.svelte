<script>
  import { statuses } from "../constants";
  export let currentStatus;
  let isExpanded = false;

  const toggle = () => (isExpanded = !isExpanded);
</script>

<style>
  .status-list {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 0.5rem 0;
    background: #f5f5f6;
    overflow: hidden;
    cursor: pointer;
  }

  :global(.sr-only) {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }

  .status-single {
    position: relative;
    display: block;
    padding: 0 1rem;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .status-single:before {
    content: "";
    /*display: none;*/
    width: 2px;
    position: absolute;
    top: calc(1rem + 4.5px);
    background: #8d8d8d;
    bottom: calc(1rem + 4.5px);
    left: calc(1rem + 3.5px);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  .status-single.active {
    padding: 0.5rem 1rem;
    height: 1.5rem;
  }

  .status-single.active .icon {
    background: green;
  }

  .icon {
    position: relative;
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #8d8d8d;
    margin-right: 0.5rem;
    border-radius: 50%;
    padding: 2.5px;
    vertical-align: baseline;
  }

  .status-list.expanded .status-single {
    padding: 0.5rem 1rem;
    height: 1.5rem;
  }

  .status-list.expanded .status-single:before {
    display: block;
    top: 0;
    bottom: 0;
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }

  .status-list.expanded .status-single:first-child:before {
    top: calc(1rem + 4.5px);
  }

  .status-list.expanded .status-single:last-child:before {
    bottom: calc(1rem + 4.5px);
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes disappear {
    100% {
      opacity: 0;
      display: none;
    }
  }
</style>

<div class="status">
  <span class="sr-only">Lo stato corrente dell'ordine è in preparazione</span>
  <ul
    class={`status-list ${isExpanded ? 'expanded' : ''}`}
    role="button"
    on:click={toggle}>
    {#each Object.keys(statuses) as statusId}
      <li class={`status-single ${currentStatus === statusId ? 'active' : ''}`}>
        <span class="icon" />
        {statuses[statusId]}
      </li>
    {/each}
  </ul>
</div>
