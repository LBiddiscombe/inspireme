<script>
  import Spinner from 'svelte-spinner'
  import { user, authPromise } from './stores/authStore'
  import Login from './components/Login.svelte'
  import Main from './components/Main.svelte'

  //let promise = authPromise // this local variable allows await to be more conservative on updates (svelte issue #2355)
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<main class="h-full">
  {#await $authPromise}
    <div class="grid w-full h-full place-items-center">
      <Spinner size="100" speed="750" color="#bada55" thickness="2" gap="40" />
    </div>
  {:then _}
    {#if $user}
      <Main />
    {:else}
      <Login />
    {/if}
  {:catch error}
    Error:
    {JSON.stringify(error, null, 2)}
  {/await}
</main>
