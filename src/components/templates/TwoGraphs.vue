<template>
  <section class="h-screen p-4 md:p-16 text-white">
    <div class="flex w-full h-full">
      <div class="p-4">
        <slot name="col-1"></slot>
      </div>
      <div class="p-4">
        <slot name="col-2"></slot>
      </div>
    </div>
    <div class="w-full">
      <slot name="description"></slot>
    </div>
  </section>
</template>
