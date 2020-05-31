<template>
  <div id="app" class="bg-gray-800 min-h-screen">
    <div class="h-screen p-8 md:p-16 flex flex-col" ref="titleScreen">
      <header class="bg-gray-500 p-8 text-center text-4xl md:text-6xl max-w-screen-md	 mx-auto">
        <!-- Maybe turn into a footer progress toolbar that zooms in from the bottom -->
        Disease. It hurts us all.
      </header>
      <section class="h-full max-w-screen-md mx-auto p-8 flex-grow flex flex-col text-lg">
        <!-- Hero -->
        <div class="text-white my-auto flex-grow">
          <p class="my-4">
            On March 11, 2020, COVID-19 was declared a pandemic by the World
            Health Organization.
          </p>
          <p class="my-4">
            Some regions were well-equipped to handle the incoming disaster. Some weren't.
          </p>
          <p class="my-4">
            We know that to reduce impacts on health systems, we need to flatten
            the curve, whether through social distancing or wearing face masks.
          </p>
          <p class="my-4">
            It's obvious that COVID-19 has impacted global affairs in more than
            one way.
          </p>
          <p class="text-2xl">But what isn't obvious about COVID-19?</p>
        </div>
      </section>
      <a class="text-center text-3xl text-white font-bold p-4" href="#section1" v-on:click="scrollScreen" ref="callToAction">
        Let's find out.
        <span class="material-icons text-5xl">arrow_drop_down</span>
      </a>
    </div>
    <title-section id="section1">
      <template slot="title">
        Test
      </template>
      <template slot="subtitle">
        Subtitle
      </template>
    </title-section>
    <div class="sticky bottom-0 h-14">
      Test
    </div>
    <context-viz-section>
      <template slot="title">
      </template>
      <template>
      </template>
    </context-viz-section>

  </div>
</template>

<script>
import TitleSection from './components/TitleSection.vue'
import ContextVizSection from './components/ContextVizSection.vue'

export default {
  components: {
    'title-section': TitleSection,
    'context-viz-section': ContextVizSection,
  },
  methods: {
    scrollScreen() {
      const container = this.$refs.titleScreen
      container.scrollTop = container.scrollHeight
    },
  },
}
</script>

<style lang="postcss">
@import './assets/tailwind.css'
</style>
