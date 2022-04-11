<template>
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
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <span class="fas fa2"><b-icon-chat-quote /></span>
            <div class="text">
              <div>
                <h3>{{ author }}</h3>
                <p>{{ quote }}</p>
                <button
                  class="d-none"
                  id="link_test"
                  @click="clickLink">
                  Link test
                </button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-overlay>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Quote',
  props: {
    idQuote: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      quote: '',
      author: '',
      busy: false
    }
  },
  created () {
    this.getQuote()
    this.busy = true
  },
  methods: {
    clickLink () {
      window.location.href = '/character/2'
    },
    async getQuote () {
      try {
        let dataUrl = ''
        if (this.idQuote) {
          dataUrl = `https://www.breakingbadapi.com/api/quotes/${this.idQuote}`
        } else {
          dataUrl = 'https://www.breakingbadapi.com/api/quote/random'
        }
        const data = await axios(dataUrl)
        this.quote = data.data[0].quote
        this.author = data.data[0].author
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="sass">
  @import '@/assets/scss/components/quote.scss'
</style>
