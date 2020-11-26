<template>
  <div class="bg-white p-3 border-b hover:bg-gray-100">
    <!-- <b>#{{item.id}}</b> -->
    <h6 class="font-semibold text-sm text-gray-600">{{ item.title }}</h6>
    <small class="text-gray-400 text-xs leading-none">{{item.body}}</small>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  }
}
</script>