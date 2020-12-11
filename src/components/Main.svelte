<script>
  import Spinner from 'svelte-spinner'
  import { user, signOut } from '../stores/authStore'
  import { data, dataPromise, connect } from '../stores/dataStore'
  import PromptCard from './PromptCard.svelte'
  import Modal from './Modal.svelte'

  let selectedPrompt = null
  connect()

  $: categories = $data ? [...new Set($data.map((data) => data.item.category))] : []
</script>

<style>
  .card {
    scroll-snap-align: center;
    width: 25%;
    min-width: 20rem;
  }

  .list::after {
    content: '';
    flex: auto;
  }
  .list::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 639px) {
    .categories {
      overflow-y: scroll;
      scroll-snap-type: y mandatory;
    }

    .category {
      scroll-snap-align: start;
    }

    .category:last-of-type {
      scroll-snap-align: end;
    }

    .list {
      overflow-x: scroll;
      scroll-snap-type: x proximity;
      scroll-snap-points-x: repeat(100%);
      scroll-snap-type: mandatory;
      scroll-snap-destination: 100% 0%;
    }

    .card {
      width: calc(100vw - 5rem);
    }
  }
</style>

{#await $dataPromise}
  <div class="grid w-full h-full place-items-center">
    <Spinner size="100" speed="750" color="#5CA1E5" thickness="2" gap="40" />
  </div>
{:then _}
  <div class="flex flex-col h-full max-w-screen-xl mx-auto categories">
    {#each categories as category}
      <div class="mb-16 category">
        <div class="grid items-center w-full grid-cols-2">
          <h2 class="ml-2 text-2xl font-bold capitalize">{category}</h2>
          <button
            class="grid w-12 h-12 text-3xl text-gray-200 border-0 rounded-full outline-none place-items-center justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
          </button>
        </div>
        <div
          class="grid grid-flow-col auto-cols-auto list justify-items-center sm:flex sm:flex-wrap sm:w-full sm:justify-start">
          {#each $data.filter((d) => d.item.category === category) as prompt}
            <div class="relative p-2 card" on:click={() => (selectedPrompt = prompt)}>
              <PromptCard prompt={prompt.item} />
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  {#if selectedPrompt}
    <Modal on:close={() => (selectedPrompt = null)}>
      <div class="w-screen h-full max-w-screen-md p-2">
        <PromptCard prompt={selectedPrompt} expanded={true} />
      </div>
    </Modal>
  {/if}

  <button class="fixed bottom-0 right-0 px-4 py-2 m-4 capitalize bg-red-400" on:click={signOut}>Sign
    Out
    {$user.username}</button>
{:catch error}
  {JSON.stringify(error, null, 2)}
{/await}
