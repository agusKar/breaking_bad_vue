<template>
  <b-container>
    <b-row>
      <b-col
        cols
        md="12"
      >
        <h1>Random Death</h1>
        <b-card no-body bg-variant="primary-green" text-variant="white" class="border-0">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="character.img" alt="Image" class="rounded-0" />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <div class="text-center">
                  <h1>{{ character.death }}</h1>
                  <h4> <i>"{{ character.nickname }}"</i> </h4>
                </div>
                <hr>
                <b-card-text>
                  <ul>
                    <li>
                      <b>Cause:</b>
                      <ul>
                        <li>
                          {{ character.cause }}
                        </li>
                      </ul>
                    </li>
                    <li class="mt-4">
                      <b>Last Words:</b>
                      <ul>
                        <li>
                          <b-icon-chat-quote class="mr-2" /> "{{ character.last_words }}""
                        </li>
                      </ul>
                    </li>
                    <li class="mt-4">
                      <b>Occupation:</b>
                      <ul>
                        <li
                          v-for="(occupation, index) in character.occupation"
                          :key="index"
                          variant="primary-green"
                        >
                          {{ occupation }}
                        </li>
                      </ul>
                    </li>
                    <li class="mt-4">
                      <b>Responsible:</b>
                      <ul>
                        <li>
                          {{ character.responsible }}
                        </li>
                      </ul>
                    </li>
                    <li class="mt-4">
                      <b>Season:</b>
                      <ul>
                        <li>
                          {{ character.season }}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      character: {}
    }
  },
  created () {
    this.getRandomDeath()
  },
  methods: {
    async getRandomDeath () {
      try {
        const data = await axios('https://www.breakingbadapi.com/api/random-death')
        console.log(data.data)
        this.character = data.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
