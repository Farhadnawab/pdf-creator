<template>
  <div class="w-56 h-screen bg-gray-200 overflow-y-auto border-r flex flex-col" style="min-width:14rem;">
    <div class="sidebar-top overflow-y-auto flex-grow py-4">
      <h3 class="mb-3 px-4 font-bold text-xl">PDF List</h3>

      <div v-if="!pdfList" class="text-center mt-12">
          <i class="fas fa-spinner fa-spin"></i> Loading...
      </div>
      <ul class="pdf-list mb-0 border-t"  v-if="pdfList">
        <li v-for="item in pdfList" :key="item.title">
          <router-link  :to="'/edit/' + item.id">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sidebar-bottom p-4">
      <button class="bg-purple-600 px-6 py-3 rounded hover:bg-purple-700 text-white block text-center w-full">Download All PDFS</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PDFList',
  props: {
    pdfList: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pdf-list li a{
  @apply block p-4 pl-12 cursor-pointer w-full bg-no-repeat overflow-hidden border-b;
  text-overflow:ellipsis;
  white-space: nowrap;
  background-image:url('~@/assets/images/icon-doc.svg');
  background-size:29px;
  background-position:center left 10px;
}

.pdf-list li a.router-link-active {
  @apply bg-white;
}

.pdf-list li a:hover{
  @apply bg-gray-100;
}

.pdf-list li svg{
  @apply mr-2;
  min-width:1.5rem;
}

</style>
