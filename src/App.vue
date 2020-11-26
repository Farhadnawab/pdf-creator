<template>
  <div id="app" class="flex h-screen">
    <pdf-list :pdf-list="pdfList"/>

    <div class="content-area p-8 flex-grow bg-gray-100 h-screen overflow-y-auto">
      

      <router-view @updateList="updatePDFList"/>

    </div>
  </div>
</template>

<script>
import PDFListVue from '@/components/partials/PDFList.vue';


export default {
  name: 'app',
  components: {
    'pdfList': PDFListVue,
  },
  created () {
    this.fetchData()
  },
  data(){
    return {
      pdfList : []
    }
  },
  methods: {
    fetchData () {
      let browserList = localStorage.getItem("pdfList");

      if (typeof browserList !== 'undefined' && browserList !== null){
        browserList = JSON.parse(browserList);
        this.pdfList = browserList;
      }
      else{
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
          .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
            }
            data.length = 3;
            this.pdfList = data;

            localStorage.setItem('pdfList', JSON.stringify(data));          
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      }
    },
    updatePDFList(list){
      this.pdfList = list;
    }
  }
}
</script>

