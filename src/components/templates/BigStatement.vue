<template>
  <section class="big-statement h-screen p-4 md:p-16 text-white font-display flex">
    <div class="max-w-4xl m-auto">
      <div class="m-auto text-5xl max-w-4xl">
        <slot></slot>
      </div>
      <div class="mt-8 text-3xl max-w-4xl">
        <slot name="subtext"></slot>
      </div>
    </div>
  </section>
</template>
