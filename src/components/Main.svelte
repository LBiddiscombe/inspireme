<script>
  import { user, signOut } from '../stores/authStore'
</script>

<div class="flex flex-col w-1/2 mx-auto conatiner">
  <h1 class="text-3xl text-center">Main Content Here...</h1>
</div>
<button class="fixed top-0 right-0 p-4 m-4 capitalize bg-red-400" on:click={signOut}>Sign Out {$user.username}</button>
