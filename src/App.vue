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
      <a class="text-center text-3xl text-white font-bold p-4" href="#title" ref="callToAction">
        Let's find out.
        <span class="material-icons text-5xl">arrow_drop_down</span>
      </a>
    </div>
    <!-- <title-section id="section1" ref="section1">
      <template slot="title">
        Beyond the Surface: A Visual Exploration of COVID-19
      </template>
      <template slot="subtitle">
        Now 
      </template>
      <template slot="default">
        <p>This is a lot of lorem ipsum text.</p>
      </template>
    </title-section> -->
    <!-- <div class="sticky bottom-0 h-14 p-4 text-white">
      <div class="font-bold text-lg">
        {{ currentSection }} of {{ totalSections }}
      </div>
    </div> -->
    <big-statement id="title">
      <template slot="default">
      Beyond the Surface: A Visual Exploration of COVID-19
      </template>
      <template slot="subtext">
        An analysis by Cari Reinert, Ellie Rose Mattoon, Savannah Ahmad, Sanjana Naples, and Willie Chalmers III
      </template>
    </big-statement>
    <big-statement id="section2" ref="section2">
      Is there a connection between air quality and infection rates?
    </big-statement>
    <context-viz-section id="section3" ref="section3">
      <template slot="title">
        Air Quality Index
      </template>
      <template slot="context">
        <p class="mb-4">
          The Air Quality Index is a tool to determine overall levels of
          pollution in a certain region. Higher AQIs may lead to members of the
          population experiencing adverse side effects. Research shows that
          people who live in more polluted cities tend to have higher COVID-19
          mortality rates. 
        </p>
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
          style="width: 60vw; height: 75vh;"
        >
        </GmapMap>
        <div>
          <!-- Progress Bar -->
          <!-- Controls -->
        </div>
      </template>
    </context-viz-section>
    <title-section>
      <template slot="title">
        What else about air quality?
      </template>
      <template slot="subtitle">
        
      </template>
      <template slot="default">
        <p>
          Recent reports have shown that human reactions to the disease have
          improved air quality in some areas, but it’s important to note that
          air quality impacts public health, leaving polluted areas more
          susceptible to high mortality rates when respiratory diseases hit.
          Human health and the environment have a closely intertwined
          relationship, which data from both agencies on earth and satellites
          in space demonstrates. 
        </p>
        <a class="text-center text-3xl text-white font-bold p-4 mt-56 mx-auto" href="#humidityTitle" ref="callToAction">
        Keep reading.
        <span class="material-icons text-5xl">arrow_drop_down</span>
        </a>
      </template>
    </title-section>
    <big-statement id="humidityTitle">
      Does humidity help the virus spread?
    </big-statement>
    <context-viz-section id="section4" ref="section4">
      <template slot="title">
        Humidity
      </template>
      <template slot="context">
        <p class="mb-4">
          Since virus particles travel farther in drier air, COVID-19 tends to
          spread faster in areas with less humidity.
        </p>
        <p class="mb-4">
          Dry air also affects human immune systems, leading to mucus membranes
          in the nose and throat cracking and leaving those cracks more
          vulnerable to infection. This map shows the correlation between
          humidity and infection rates on a global scale. 
        </p>
      </template>
      <template slot="visual">
        <GmapMap ref="map-section4"
          :center="{lat:0, lng:0}"
          :zoom="4"
          map-type-id="terrain"
          class="max-w-full"
          style="width: 60vw; height: 75vh;"
        >
        </GmapMap>
        <div>
          <!-- Progress Bar -->
          <!-- Controls -->
        </div>
      </template>
    </context-viz-section>
    <big-statement>
      Does temperature actually impact infection rates?
    </big-statement>
    <context-viz-section id="section5" ref="section5">
      <template slot="title">
        Temperature
      </template>
      <template slot="context">
        <p class="mb-4">
          Although incremental changes in temperature don’t appear to have much of
          an effect on the spread of COVID-19, very hot temperatures are more
          difficult for virus particles to survive in. That may be one of the
          reasons why transmission appears to occur at lower rates in states
          near the equator or in other hot, humid environments. 
        </p>
      </template>
      <template slot="visual">
        <GmapMap ref="map-section4"
          :center="{lat:0, lng:0}"
          :zoom="4"
          map-type-id="terrain"
          class="max-w-full"
          style="width: 60vw; height: 75vh;"
        >
        </GmapMap>
        <div>
          <!-- Progress Bar -->
          <!-- Controls -->
        </div>
      </template>
    </context-viz-section>
    <!-- <two-graphs>
      <template slot="col-1">
        <div class="bg-gray-700">

        </div>
      </template>
      <template slot="col-2">
        <div class="bg-gray-700">

        </div>
      </template>
      <template slot="description">
        <p>Test description</p>
      </template>
    </two-graphs> -->
    <big-statement>
      What do we do now?
    </big-statement>
    <!-- <three-column>
      <template slot="col-1">
        <div class="action-col">
          <h1 class="text-center text-bold text-3xl py-4">
            Header 1
          </h1>
          <p>
            Body
          </p>
        </div>
      </template>
      <template slot="col-2">
        <div class="action-col">
          <h1 class="text-center text-bold text-3xl py-4">
            Header 2
          </h1>
          <p>
            Body
          </p>
        </div>
      </template>
      <template slot="col-3">
        <div class="action-col">
          <h1 class="text-center text-bold text-3xl py-4">
            Header 3
          </h1>
          <p>
            Body
          </p>
        </div>
      </template>
    </three-column> -->
    <section id="logo" class="h-screen flex">
      <div class="m-auto">
        <img src="./assets/cinquanauts_logo.png" class="mx-auto logo md:max-w-sm md:max-h-sm">
        <div class="text-5xl text-center text-white">Built by the Cinquanauts</div>
      </div>
    </section>
  </div>
</template>

<script>
import { gmapApi } from 'gmap-vue'
import TitleSection from './components/TitleSection.vue'
import ContextVizSection from './components/ContextVizSection.vue'
import BigStatementSection from './components/templates/BigStatement.vue'
// import ThreeColumn from './components/templates/ThreeColumn.vue'
// import TwoGraphs from './components/templates/TwoGraphs.vue'

// Colors
// dark blue: #241849
// lighter blue: #466391
// neutral: #9DA7A9
// cream: #F1E0DC
// light orange: #D39475

export default {
  components: {
    'title-section': TitleSection,
    'context-viz-section': ContextVizSection,
    'big-statement': BigStatementSection,
    // 'three-column': ThreeColumn,
    // 'two-graphs': TwoGraphs,
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    scrollScreen() {
      const container = this.$refs.titleScreen
      container.scrollTop = container.scrollHeight
    },
    async loadData() {
      return {
        airPollution: [
          
        ],
      }
    },
    async populateMaps(data) {
      console.log(data)
      const map = await this.$refs['map-section1'].$mapPromise
      console.log('Map is loaded')
      console.debug(map)
    },
  },
  data() {
    return {
      currentSection: 0,
      totalSections: 3,
    }
  },
  async mounted() {
    try {
      const data = await this.loadData()
      await this.populateMaps(data)
    } catch (e) {
      alert(`Sorry, we couldn't load map data.`)
    }
    this.observer = new IntersectionObserver(entries => {
       if (entries[0].intersectionRatio <= 0) {
         return
       }
       console.log('New stuff')
      //  this.onSectionChanged()
    })
    this.observer.observe(document.querySelector('#section3'))
  },
}
</script>

<style lang="postcss">
@import './assets/tailwind.css';

#app {
  background-color: #241849;
  transition: 0.25s all;
  /* overflow-y: scroll; */
  scroll-behavior: smooth;
}

.action-col {
  background-color: #466391;
}

#section3 {
  background-color: #9DA7A9;
}

#section5 {
  background-color: #D39475;
}

#logo {
  background-color: #241849;
  text-color: white;
}

.logo {
  height: 368px;
  width: 368px;
}
</style>
