<template>
  <b-container class="mt-5">
    <hr>
    <b-row
      class="justify-content-center"
    >
      <b-col
        v-for="character in characters"
        :key="character.char_id"
        cols
        sm="6"
        md="4"
      >
        <Card
          :character="character"
        />
      </b-col>
    </b-row>
    <hr>
  </b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ListCards',
  props: {
    listCharacters: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      characters: []
    }
  },
  watch: {
    $props: {
      handler () {
        this.characters = this.listCharacters
      },
      deep: true,
      immediate: true
    }
  },
  created () {
    if (!this.listCharacters) {
      this.getCharacters()
    }
  },
  methods: {
    async getCharacters () {
      try {
        const data = await axios('https://www.breakingbadapi.com/api/characters?limit=8')
        this.characters = data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="scss">
  @import '@/assets/scss/components/listCards.scss';
</style>
