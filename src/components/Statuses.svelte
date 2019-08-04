<script>
  import { statuses } from "../constants";
  export let currentStatus;
  let isExpanded = false;

  const toggle = () => (isExpanded = !isExpanded);
</script>

<style>
  .status-list {
    padding: 0.5rem 0;
    background: #eee;
    overflow: hidden;
  }

  .sr-only {
    display: none;
  }

  .status-single {
    position: relative;
    display: block;
    padding: 0 1rem;
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease;
  }

  .status-single::before {
    content: "";
    display: none;
    width: 1px;
    position: absolute;
    top: 0;
    background: #000;
    bottom: 0;
    left: calc(1rem + 4.5px);
  }

  .status-single.active {
    padding: 0.5rem 1rem;
    height: 1.5rem;
  }

  .status-single.active .icon {
    background: green;
  }

  .icon {
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #666;
    margin-right: 0.5rem;
    border-radius: 50%;
    padding: 2.5px;
    vertical-align: baseline;
  }

  .status-list.expanded .status-single {
    padding: 0.5rem 1rem;
    height: 1.5rem;
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
