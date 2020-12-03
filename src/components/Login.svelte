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
      <img class="w-20 h-20 mx-auto mb-5" src="https://img.icons8.com/bubbles/344/brain.png" alt="Brain logo" />
      <h1 class="mb-2 -mt-8 text-xl text-center">InspireME</h1>
    </header>

    <button
      class="w-full px-4 py-2 mb-4 text-sm text-center text-green-700 underline border-0 outline-none"
      on:click={() => (isSignInMode = !isSignInMode)}
      type="button">{isSignInMode ? 'New to InspireME? Create a new user' : 'Already joined? Sign in existing user'}</button>
    <form>
      <div>
        <label class="flex mb-2 text-gray-800 bg-gray-300 border border-gray-400 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="px-1 stroke-current"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <input
            class="w-full p-2 text-gray-900 bg-gray-300 rounded-none outline-none focus:bg-gray-100"
            type="text"
            name="username"
            bind:value={username} />
        </label>
      </div>
      <div>
        <label class="flex mb-8 text-gray-800 bg-gray-300 border border-gray-400 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="px-1 stroke-current"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
          </svg>
          <input
            class="w-full p-2 text-gray-900 bg-gray-300 rounded-none outline-none focus:bg-gray-100"
            type="password"
            name="password"
            bind:value={password} />
        </label>
      </div>
      <div>
        <button
          on:click|preventDefault={handleSubmit}
          type="submit"
          class="w-full px-4 py-2 mb-4 font-bold text-white bg-green-700 rounded hover:bg-green-500">{isSignInMode ? 'Sign In' : 'Sign Up'}</button>
      </div>
    </form>
    <div class="h-px my-4 bg-gray-700" />
    <button
      on:click={() => signIn('public', 'public')}
      class="w-full px-4 py-2 font-bold text-white bg-indigo-800 rounded hover:bg-indigo-600">Try the public demo board</button>
  </div>
</div>
