<template>
  <b-container>
    <b-row class="justify-content-center">
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
        <b-col
          cols
          md="12"
        >
          <b-card no-body bg-variant="primary-green" text-variant="white" class="border-0">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img :src="character.img" alt="Image" class="rounded-0" />
              </b-col>
              <b-col md="6">
                <b-card-body>
                  <div class="text-center">
                    <h1>
                      {{ character.name }}
                      <span
                        v-if="character.status == 'Alive'"
                        v-b-tooltip.hover.bottom
                        title="Alive"
                      >
                        <b-icon-emoji-smile />
                      </span>
                      <span
                        v-else
                        v-b-tooltip.hover.bottom
                        :title="character.status"
                      >
                        <b-icon-emoji-frown />
                      </span>
                    </h1>
                    <h4> <i>"{{ character.nickname }}"</i> </h4>
                  </div>
                  <hr>
                  <b-card-text>
                    <ul>
                      <li>
                        <b>birthday:</b>
                        <ul>
                          <li>
                            <b-icon-calendar2 /> {{ character.birthday }}
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
                        <b>Seasons:</b>
                        <ul>
                          <li
                            v-for="(season, index) in character.appearance"
                            :key="index"
                            variant="primary-green"
                          >
                            {{ season }}
                          </li>
                        </ul>
                      </li>
                      <li class="mt-4">
                        <b>Portrayed:</b>
                        <ul>
                          <li>
                            {{ character.portrayed }}
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
      </b-overlay>
    </b-row>
  </b-container>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      character: {},
      busy: false
    }
  },
  created () {
    this.getCharacter()
  },
  methods: {
    async getCharacter () {
      try {
        this.busy = true
        const data = await axios(`https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`)
        this.character = data.data[0]
        this.busy = false
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
