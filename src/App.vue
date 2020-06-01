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
        This is a title describing some aspect of the crisis
      </template>
      <template slot="subtitle">
        Now 
      </template>
      <template slot="default">
      </template>
    </title-section>
    <div class="sticky bottom-0 h-14 p-4 text-white">
      <div class="font-bold text-lg">
        <!-- Section number -->
        {{ currentSection }} of {{ totalSections }}
      </div>
    </div>
    <big-statement>
      Some sort of quote or statement that uses a lot of space to create visual
      interest and emphasis.
    </big-statement>
    <context-viz-section>
      <template slot="title">
        COVID-19 City Environments
      </template>
      <template slot="context">
        <p class="mb-4">
          Unsurprisingly, there's a pretty big link between urban density and rate
          of COVID-19 infections.
        </p>
        <p class="mb-4">
          However, in some countries, the effect is more pronounced.
        </p>
      </template>
      <template slot="visual">
        <GmapMap ref="map-section1"
          :center="{lat:0, lng:0}"
          :zoom="4"
          map-type-id="terrain"
          class="max-w-full"
          style="width: 60vw; height: 80vh;"
        >
        </GmapMap>
      </template>
    </context-viz-section>
    <big-statement>
      How did we get here?
    </big-statement>
    <big-statement>
      What do we do now?
    </big-statement>
  </div>
</template>

<script>
import TitleSection from './components/TitleSection.vue'
import ContextVizSection from './components/ContextVizSection.vue'
import BigStatementSection from './components/templates/BigStatement.vue'

export default {
  components: {
    'title-section': TitleSection,
    'context-viz-section': ContextVizSection,
    'big-statement': BigStatementSection,
  },
  methods: {
    scrollScreen() {
      const container = this.$refs.titleScreen
      container.scrollTop = container.scrollHeight
    },
  },
  data() {
    return {
      currentSection: 0,
      totalSections: 3,
    }
  },
}
</script>

<style lang="postcss">
@import './assets/tailwind.css'
</style>
