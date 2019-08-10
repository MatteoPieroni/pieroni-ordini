<script>
  import { statuses } from "../constants";
  export let currentStatus;
</script>

<style type="text/scss">

</style>

{#each Object.keys(statuses) as statusId}
  <td
    class={`status-single ${currentStatus > statusId ? 'done' : ''} ${currentStatus === statusId ? 'active' : ''}`}>
    <span class="icon" />
  </td>
{/each}
