<script>
  export let prompt

  let { title, image, summary } = prompt
</script>

<style>
  .card {
    scroll-snap-align: center;
    width: 25%;
    min-width: 20rem;
  }

  @media screen and (max-width: 450px) {
    .card {
      width: calc(100vw - 5rem);
    }
  }
</style>

<div class="relative p-2 card">
  <div class="h-full overflow-hidden bg-gray-900 rounded-lg shadow-lg">
    <img class="object-cover object-center w-full h-56" src={image} alt="hero" />
    <div class="p-4">
      <h1 class="mb-3 text-lg font-medium text-gray-500 title-font">{title}</h1>
      <p class="mb-3 leading-relaxed">{summary}</p>
      <span class="absolute bottom-0 right-0 my-3 mr-3 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="13" y1="18" x2="19" y2="12" />
          <line x1="13" y1="6" x2="19" y2="12" />
        </svg>
      </span>
    </div>
  </div>
</div>
