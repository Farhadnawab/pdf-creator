<template>
  <div id="app" class="flex h-screen">
    <pdf-list />

    <div class="content-area p-8 flex-grow bg-gray-100 h-screen overflow-y-auto">
      <div class="mb-8">
        <router-link to="/add" class="bg-green px-6 py-2 rounded text-white bg-green-600 font-semibold">Add PDF</router-link>
      </div>

      <router-view/>

    </div>
  </div>
</template>

<script>
import PDFListVue from '@/components/partials/PDFList.vue';


export default {
  name: 'app',
  components: {
    'pdfList': PDFListVue,
  }
}
</script>

