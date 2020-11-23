<template>
  <div>
    <h3 class="mb-8 font-bold text-xl">Add PDF</h3>
    <section class="text-center mb-10">
      <h3 class="font-semibold text-2xl mb-6">Choose Your PDF Template</h3>
      <div class="flex justify-center">
        <div class="item w-40 mx-3 p-4 rounded-lg border bg-white cursor-pointer hover:bg-gray-300">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          <h5>Template 1</h5>
        </div>

        <div class="item w-40 mx-3 p-4 rounded-lg border bg-white cursor-pointer hover:bg-gray-300">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          <h5>Template 2</h5>
        </div>

        <div class="item w-40 mx-3 p-4 rounded-lg border bg-white cursor-pointer hover:bg-gray-300">
          <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Document</title><path d='M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z' fill='none' stroke='currentColor' stroke-linejoin='round' stroke-width='32'/><path d='M256 56v120a32 32 0 0032 32h120' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'/></svg>
          <h5>Template 3</h5>
        </div>
      </div>
    </section>

    <section class="text-center mb-16">
      <h3 class="font-semibold text-2xl mb-6">Find Entry</h3>
      <div class="flex justify-center">
        <input type="text" class="h-12 w-64 bg-white border px-2 rounded outline-none">
        <button class="h-12 text-white bg-gray-800 px-6 ml-2 rounded">Search</button>
      </div>
    </section>

    
    <section class="text-center">
      <h3 class="font-semibold text-2xl mb-6">Choose Variants</h3>
      <div class="bg-white p-4 rounded mt-4 w-64 border mx-auto">
        <div class="">
          <label><input type="radio" name="variant"> Option 1</label>
        </div>

        <div class="">
          <label><input type="radio" name="variant"> Option 1</label>
        </div>

        <div class="">
          <label><input type="radio" name="variant"> Option 1</label>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  name: 'addPDF',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
