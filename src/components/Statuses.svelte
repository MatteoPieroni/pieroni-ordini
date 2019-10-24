<script>
  import Chevron from "./Chevron.svelte";
  import { statuses } from "../constants";
  export let currentStatus;
  let isExpanded = false;

  const toggle = () => (isExpanded = !isExpanded);
</script>

<style type="text/scss">
  .status-list {
    position: relative;
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
    @media (min-width: 1024px) {
      transition: none;
    }
  }

  .status-single:before {
    content: "";
    /*display: none;*/
    width: 2px;
    position: absolute;
    top: calc(1rem + 4.5px);
    background: #cfcece;
    bottom: calc(1rem + 4.5px);
    left: calc(1rem + 6.5px);
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
    @media (min-width: 1024px) {
      transition: none;
    }
  }

  .icon {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #cfcece;
    margin-right: 0.5rem;
    border-radius: 50%;
    padding: 2.5px;
    top: 1.5px;
    vertical-align: baseline;
  }

  .icon-open {
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 1rem;
    transform: translateY(-50%);
  }

  .status-single.done {
    &:before {
      background: #4c78b7;
    }
    .icon {
      background: #4c78b7;
    }
  }

  .status-single.active {
    padding: 0.5rem 1rem;
    height: 1.5rem;
    &:before {
      background: rgb(76, 120, 183);
      background: linear-gradient(
        180deg,
        rgba(76, 120, 183, 1) 0%,
        rgba(76, 120, 183, 1) 49%,
        #cfcece 50%
      );

      @media (min-width: 1024px) {
        background: linear-gradient(
          90deg,
          #4c78b7 0%,
          #4c78b7 calc(2rem + 5px),
          #cfcece calc(2rem + 5.1px)
        );
      }
    }
    .icon {
      background: #182c66;
    }
  }

  .status-list.expanded {
    background: #fff;

    @media (min-width: 1024px) {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .status-single {
      padding: 0.5rem 1rem;
      height: 1.5rem;

      @media (min-width: 1024px) {
        padding: 1rem;
        height: auto;
        overflow: visible;
      }
    }

    .status-single .icon {
      @media (min-width: 1024px) {
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    .status-single:before {
      display: block;
      top: 0;
      bottom: 0;
      opacity: 1;
      transition: opacity 0.25s ease-in-out;

      @media (min-width: 1024px) {
        top: calc(1.5rem + 0.5px);
        bottom: unset;
        left: -1rem;
        right: -1rem;
        width: unset;
        height: 2px;
      }
    }

    .status-single:first-child:before {
      top: calc(1rem + 4.5px);
      @media (min-width: 1024px) {
        top: calc(1.5rem + 0.5px);
        left: calc(1rem + 5px);
      }
    }

    .status-single:last-of-type:before {
      bottom: calc(1rem + 4.5px);
      @media (min-width: 1024px) {
        right: calc(100% - 1rem - 5px);
      }
    }

    .status-single.active {
      font-weight: bold;
      &:first-child:before {
        @media (min-width: 1024px) {
          background: linear-gradient(
            90deg,
            #4c78b7 0%,
            #4c78b7 0.5px,
            #cfcece 1px
          );
        }
      }
    }

    .status-single.active .icon {
      animation: pulse 2s infinite;
    }

    .icon-open {
      transform: translateY(-105%) rotate(0.5turn);
    }
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

  @-webkit-keyframes pulse {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(24, 44, 102, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 10px rgba(24, 44, 102, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(24, 44, 102, 0);
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(24, 44, 102, 0.4);
      box-shadow: 0 0 0 0 rgba(24, 44, 102, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(24, 44, 102, 0);
      box-shadow: 0 0 0 10px rgba(24, 44, 102, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(24, 44, 102, 0);
      box-shadow: 0 0 0 0 rgba(24, 44, 102, 0);
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
      <li
        class={`status-single ${currentStatus > statusId ? 'done' : ''} ${currentStatus === statusId ? 'active' : ''}`}>
        <span class="icon" />
        {statuses[statusId]}
      </li>
    {/each}
    <span class="icon-open">
      <Chevron />
    </span>
  </ul>
</div>
