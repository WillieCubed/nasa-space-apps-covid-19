<template>
  <section class="h-screen p-4 md:p-16 text-white grid grid-cols-3 gap-4">
    <div class="h-full">
      <slot name="col-1"></slot>
    </div>
    <div class="h-full">
      <slot name="col-2"></slot>
    </div>
    <div class="h-full">
      <slot name="col-3"></slot>
    </div>
  </section>  
</template>
