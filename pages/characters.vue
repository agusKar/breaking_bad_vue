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
      <h1>Characters</h1>
      <div class="overflow-auto">
        <b-pagination-nav
          v-model="currentPage"
          :link-gen="linkGen"
          :number-of-pages="6"
          use-router
          align="fill"
          pills
          class="customNav"
        />
      </div>
      <ListCards
        :list-characters="characters"
      />
      <div class="overflow-auto">
        <b-pagination-nav
          v-model="currentPage"
          :link-gen="linkGen"
          :number-of-pages="6"
          use-router
          align="fill"
          pills
          class="customNav"
        />
      </div>
    </b-overlay>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      characters: [],
      totalCharacters: 0,
      limit: 10,
      offset: 0,
      currentPage: 0,
      busy: false
    }
  },
  watch: {
    currentPage () {
      this.offset = this.currentPage === 1 ? 0 : this.currentPage * 10
      this.getCharacters()
    }
  },
  created () {
    this.getTotalCharacters()
    this.currentPage = this.$route.params.page === 1 ? 0 : this.$route.params.page
    this.getCharacters()
  },
  methods: {
    async getTotalCharacters () {
      try {
        this.busy = true
        const data = await axios('https://www.breakingbadapi.com/api/characters')
        this.totalCharacters = data.data.length
        this.totalCharacters = this.totalCharacters / 10
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    },
    linkGen (pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    async getCharacters () {
      try {
        this.busy = true
        const data = await axios(`https://www.breakingbadapi.com/api/characters?limit=${this.limit}&offset=${this.offset}`)
        this.characters = data.data
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
