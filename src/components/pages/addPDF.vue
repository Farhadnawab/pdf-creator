<template>
  <div>
    <h3 class="mb-8 font-bold text-xl text-gray-900">Add PDF</h3>
    <section class="mb-16 pl-4">
      <h3 class="font-semibold text-base mb-6 text-gray-600">Choose Your PDF Template</h3>
      <div class="flex -mx-3 text-center">
        <label class="item w-40 mx-3 p-4 rounded-lg border bg-white cursor-pointer hover:bg-gray-300" v-for="template in templates" :key="template">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          <h5>Template {{template}}</h5>
          <input type="radio" name="templates" :value="template" v-model="form.template" />
        </label>
      </div>
    </section>

    <section class="mb-16 pl-4">
      <h3 class="font-semibold text-base mb-2 text-gray-600">Find Entry</h3>
      <v-autocomplete :items="entries" v-model="form.entry" :get-label="getLabel" :component-item='template' @update-items="updateItems"></v-autocomplete>
    </section>

    
    <section class="mb-16 pl-4">
      <h3 class="font-semibold text-base mb-6 text-gray-600">Choose Variants</h3>
      <div class="bg-white p-4 rounded mt-4 w-64 border">
        <div class="mb-2" v-for="variant in variants" :key="variant">
          <label><input type="radio" name="variants" :value="variant" v-model="form.variant" /> Option {{variant}}</label>
        </div>
      </div>
      
    </section>

    <div class="actions px-4">
      <button type="button" v-on:click="addPDF" class="bg-green-500 hover:bg-green-700 px-4 py-2 text-white rounded"><i class="fa fa-save mr-1"></i> Add</button>
    </div>
  </div>
</template>

<script>
import ItemTemplate from '../partials/ItemTemplate.vue' 

export default {
  name: 'addPDF',
  data() {
    return {
      templates : [1, 2, 3],
      variants : [1, 2, 3],
      form: {
        template: '',
        entry: '',
        variant: ''
      },
      entries: [],
      template: ItemTemplate
    }
  },
  created () {
    this.getEntries()
  },
  methods : {
    addPDF : function(){
      var pdfList = localStorage.getItem("pdfList");

      if (typeof pdfList !== 'undefined' && pdfList !== null){
        pdfList = JSON.parse(pdfList);

        const isExist = pdfList.some(e => e.title === this.form.entry.title);

        if(isExist){
          alert("Record already exist!");
          return;
        }
        
        pdfList.push({id: this.form.entry.id, title: this.form.entry.title, body: `template = ${this.form.template} | variant = ${this.form.variant}`});
        localStorage.setItem('pdfList', JSON.stringify(pdfList));
      }
      else {
        localStorage.setItem('pdfList', JSON.stringify({id: this.form.entry.id, title: this.form.entry.title, body: `template = ${this.form.template} | variant = ${this.form.variant}`}));
      }

      this.updateSidebar();
    },
    getLabel (item) {
      if(item == undefined){
        return undefined;
      }

      return item.title;
    },
    updateItems (text) {
      // FUNCTION TO FILTER RESULT
      // WILL BE FUNCTIONAL WITH API
    },
    getEntries () {
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
          data.length = 10;
          this.entries = data;          
        })
        .catch(error => {
          this.errorMessage = error;
          console.error('There was an error!', error);
        });
    },
    updateSidebar(){
      this.$emit('updateList', JSON.parse(localStorage.getItem('pdfList')));
    }
  }
}
</script>

<style scoped>
</style>
