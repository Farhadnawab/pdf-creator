<template>
  <div class="p-4 w-56 h-screen bg-gray-200">
    <h3 class="mb-8 font-bold text-xl">PDF List</h3>
    <ul class="pdf-list -m-4">
      <li >
        <router-link to="/edit/2">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          Entry ABC
        </router-link>

        <router-link to="/edit/2">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          Entry ABC
        </router-link>

        <router-link to="/edit/2">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          Entry ABC
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PDFList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pdf-list li a{
  @apply uppercase flex p-4 cursor-pointer w-full;
}

.pdf-list li a:hover{
  @apply bg-gray-100;
}

.pdf-list li svg{
  @apply w-6 mr-2;
}

</style>
