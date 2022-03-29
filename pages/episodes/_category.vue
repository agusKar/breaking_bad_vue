<template>
  <div>
    <b-overlay :show="busy" rounded="lg" opacity="0">
      <template #overlay>
        <div class="d-flex align-items-center">
          <b-spinner small type="grow" variant="light-green" />
          <b-spinner type="grow" variant="secondary-violet" />
          <b-spinner small type="grow" variant="light-green" />
          <!-- We add an SR only text for screen readers -->
          <span class="sr-only">Please wait...</span>
        </div>
      </template>
      <ul>
        <li
          v-for="episode in episodes"
          :key="episode.episode_id"
        >
          <nuxt-link :to="'/episodes/episode/'+episode.episode_id">
            {{ episode.title }}
          </nuxt-link>
        </li>
      </ul>
    </b-overlay>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      category: this.$route.params.category,
      episodes: [],
      busy: false
    }
  },
  created () {
    this.busy = true
    this.getEpisodesByCategory(this.category)
  },
  methods: {
    async getEpisodesByCategory (category) {
      try {
        const data = await axios(`https://www.breakingbadapi.com/api/episodes?series=${category}`)
        this.episodes = data.data
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
