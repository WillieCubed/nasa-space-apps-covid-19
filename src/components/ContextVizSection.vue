<template>
  <section class="h-screen grid grid-cols-1 lg:grid-cols-8 p-16 gap-8">
    <aside class="lg:col-span-2 bg-gray-200">
      <h1 class="text-4xl p-4">
        <slot class="title"></slot>
      </h1>
      <div class="p-4">
        <slot name="context"></slot>
      </div>
    </aside>
    <section class="lg:col-span-6 bg-gray-700 p-4 flex">
      <div class="block w-auto m-auto">
        <slot name="visual"></slot>
      </div>
    </section>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>