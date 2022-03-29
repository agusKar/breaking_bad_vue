<template>
  <b-container>
    <b-row>
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
        <h2>Title: {{ episode.title }}</h2>
        <p>Season: {{ episode.season }}</p>
        <p>Episode: {{ episode.episode }}</p>
        <p>Air Date: {{ episode.air_date }}</p>
        <p>Series: {{ episode.series }}</p>
        <p>Characters: </p>
        <ul>
          <li
            v-for="(character, index) in episode.characters"
            :key="index"
          >
            {{ character }}
          </li>
        </ul>
      </b-overlay>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      busy: false,
      episodeId: this.$route.params.id,
      episode: {}
    }
  },
  created () {
    this.busy = true
    this.getEpisodeByID(this.episodeId)
  },
  methods: {
    async getEpisodeByID (episode) {
      try {
        const data = await axios(`https://www.breakingbadapi.com/api/episodes/${episode}`)
        this.episode = data.data[0]
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
