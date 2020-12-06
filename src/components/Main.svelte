<script>
  import { user, signOut } from '../stores/authStore'
</script>

<div class="container flex flex-col w-1/2 mx-auto" />

<button class="fixed top-0 right-0 px-4 py-2 m-4 capitalize bg-red-400" on:click={signOut}>Sign Out
  {$user.username}</button>
