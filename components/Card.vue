<template>
  <figure
    v-if="Character"
    :style="`background: url(${Character.img});`"
  >
    <h2 data-test="characterName">
      {{ Character.name }}
    </h2>
    <figcaption>
      <h3>{{ Character.name }}</h3>
      <p>
        <ul>
          <li>
            <b>Occupation:</b>
            <ul>
              <li
                v-for="(occupation, index) in Character.occupation"
                :key="index"
                variant="primary-green"
              >
                {{ occupation }}
              </li>
            </ul>
          </li>
          <li data-test="characterNickname">
            <b>Nickname:</b> {{ Character.nickname }}
          </li>
        </ul>
      </p>
      <b-button
        data-test="characterButton"
        variant="secondary-violet"
        type="dark"
        :to="`/character/${ Character.char_id }`"
      >
        More Info
      </b-button>
    </figcaption>
  </figure>
</template>
<script>
export default {
  name: 'Card',
  props: {
    Character: {
      type: Object
    }
  }
}
</script>
<style scoped lang="scss">
  @import "@/assets/scss/components/card.scss";
</style>
