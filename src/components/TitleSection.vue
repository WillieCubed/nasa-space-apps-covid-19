<template>
  <section class="h-screen p-4 md:p-16 text-white">
    <div class="md:max-w-2xl mx-auto">
      <div>
        <!-- Image -->
      </div>
      <div>
        <h1 class="text-4xl text-center">
          <slot name="title"></slot>
        </h1>
        <div class="text-3xl text-center">
          <slot name="subtitle"></slot>
        </div>
        <div class="text-lg">
          <slot><!-- Default --></slot>
        </div>
      </div>
    </div>
  </section>
</template>