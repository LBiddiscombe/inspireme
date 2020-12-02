<script>
  import { signUp, signIn } from '../stores/authStore'
  let username,
    password,
    isSignInMode = true

  function handleSubmit() {
    if (isSignInMode) {
      signIn(username, password)
    } else {
      signUp(username, password)
    }
  }
</script>

<div class="grid w-full h-full place-items-center">
  <div class="w-full max-w-xs p-5 mx-auto bg-gray-900 rounded">
    <header>
      <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/bubbles/344/brain.png" alt="Brain logo" />
      <h1 class="mb-8 -mt-8 text-xl text-center">InspireME</h1>
    </header>

    <form>
      <div>
        <label class="block mb-2 text-gray-500" for="username">Username</label>
        <input
          class="w-full p-2 mb-4 text-indigo-700 bg-gray-300 outline-none focus:bg-white"
          type="text"
          name="username"
          bind:value={username} />
      </div>
      <div>
        <label class="block mb-2 text-gray-500" for="password">Password</label>
        <input
          class="w-full p-2 mb-4 text-indigo-700 bg-gray-300 outline-none focus:bg-white"
          type="password"
          name="password"
          bind:value={password} />
      </div>
      <div>
        <button
          on:click|preventDefault={handleSubmit}
          type="submit"
          class="w-full px-4 py-2 mb-6 font-bold text-white bg-green-700 rounded hover:bg-green-500">{isSignInMode ? 'Sign In' : 'Sign Up'}</button>
      </div>
    </form>
    <button
      class="w-full px-4 py-2 font-bold text-center text-gray-600 underline border-0 outline-none"
      on:click={() => (isSignInMode = !isSignInMode)}
      type="button">{isSignInMode ? 'Create a new user' : 'Sign in existing user'}</button>
    <div class="h-px my-4 bg-gray-700" />
    <button
      on:click={() => signIn('public', 'public')}
      class="w-full px-4 py-2 font-bold text-white bg-indigo-800 rounded hover:bg-indigo-600">Try the Public board</button>
  </div>
</div>
