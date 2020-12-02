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
  <div class="w-full max-w-xs p-5 mx-auto bg-indigo-100 rounded">
    <header>
      <img class="w-20 mx-auto mb-5" src="https://img.icons8.com/bubbles/344/brain.png" alt="Brain logo" />
    </header>
    <form>
      <div>
        <label class="block mb-2 text-indigo-500" for="username">Username</label>
        <input
          class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
          type="text"
          name="username"
          bind:value={username} />
      </div>
      <div>
        <label class="block mb-2 text-indigo-500" for="password">Password</label>
        <input
          class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
          type="password"
          name="password"
          bind:value={password} />
      </div>
      <div>
        <button
          on:click={handleSubmit}
          type="button"
          class="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700">{isSignInMode ? 'Sign In' : 'Sign Up'}</button>
      </div>
    </form>
    <button
      class="float-right px-4 py-2 mb-6 font-bold text-gray-700 underline border-0 outline-none"
      on:click={() => (isSignInMode = !isSignInMode)}
      type="button">{isSignInMode ? 'Create a user' : 'Sign in existing user'}</button>
  </div>
</div>
