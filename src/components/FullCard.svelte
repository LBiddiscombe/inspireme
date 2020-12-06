<script>
  import { scale } from 'svelte/transition'
</script>

<div in:scale class="absolute top-0 left-0 grid w-full h-full bg-gray-900 place-items-center">
  <slot />
</div>
