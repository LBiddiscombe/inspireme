<script>
  import { createEventDispatcher, onDestroy } from 'svelte'
  import { fade, scale } from 'svelte/transition'

  const dispatch = createEventDispatcher()
  const close = () => dispatch('close')

  let modal

  const handle_keydown = (e) => {
    if (e.key === 'Escape') {
      close()
      return
    }

    if (e.key === 'Tab') {
      // trap focus
      const nodes = modal.querySelectorAll('*')
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0)

      let index = tabbable.indexOf(document.activeElement)
      if (index === -1 && e.shiftKey) index = 0

      index += tabbable.length + (e.shiftKey ? -1 : 1)
      index %= tabbable.length

      tabbable[index].focus()
      e.preventDefault()
    }
  }

  const previously_focused = typeof document !== 'undefined' && document.activeElement

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus()
    })
  }
</script>

<style>
  .modal {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<svelte:window on:keydown={handle_keydown} />

<div
  transition:fade={{ duration: 200 }}
  class="fixed top-0 left-0 w-full h-full bg-gray-800"
  on:click={close} />

<div
  transition:scale={{ duration: 200, start: 0.25 }}
  class="absolute h-full p-2 modal"
  role="dialog"
  aria-modal="true"
  bind:this={modal}>
  <slot name="header" />
  <slot />
  <button
    on:click={close}
    class="fixed top-0 right-0 m-5 text-3xl text-gray-200 bg-gray-900 border-0 rounded-full justify-self-end">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current"
      width="44"
      height="44"
      viewBox="2 2 20 20"
      stroke-width="1.5"
      stroke="#2c3e50"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <path d="M10 10l4 4m0 -4l-4 4" />
    </svg>
  </button>
</div>
