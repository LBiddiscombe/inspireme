<script>
  import { user, signOut } from '../stores/authStore'
  import FullCard from './FullCard.svelte'
  import PromptCard from './PromptCard.svelte'

  const categories = ['Food', 'Places', 'Games', 'Crafts']
  let prompts = [0, 1, 2, 3, 4, 5, 6, 7]
</script>

<style>
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

    .list {
      overflow-x: scroll;
      scroll-snap-type: x proximity;
      scroll-snap-points-x: repeat(100%);
      scroll-snap-type: mandatory;
      scroll-snap-destination: 100% 0%;
    }
  }
</style>

<div class="flex flex-col h-full max-w-screen-xl mx-auto categories">
  {#each categories as category}
    <div class="mb-16 category">
      <div class="grid w-full grid-cols-2 space-between">
        <h2 class="my-4 ml-2 text-2xl font-bold">{category}</h2>
        <button class="w-12 h-12 my-2 text-3xl text-white bg-indigo-800 rounded-full justify-self-end">+</button>
      </div>
      <div
        class="grid grid-flow-col auto-cols-auto list justify-items-center sm:flex sm:flex-wrap sm:w-full sm:justify-start">
        {#each prompts as prompt}
          <PromptCard {category}><span slot="title">{category} Card {prompt}</span></PromptCard>
        {/each}
      </div>
    </div>
  {/each}
</div>

<button class="fixed bottom-0 right-0 px-4 py-2 m-4 capitalize bg-red-400" on:click={signOut}>Sign Out
  {$user.username}</button>
