<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light-green" fixed="top">
      <b-navbar-brand to="/">
        <img src="/bb_logo.png" alt="Breaking Bad logo" width="160">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-auto">
          <b-nav-item to="/deaths">
            Deaths in the series: <b>{{ deaths }}</b>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/characters">
            Characters
          </b-nav-item>
          <b-nav-item-dropdown text="Episodes" right>
            <b-dropdown-item to="/episodes/Breaking Bad">
              Breaking Bad
            </b-dropdown-item>
            <b-dropdown-item to="/episodes/Better Call Saul">
              Better Call Saul
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/deaths">
            Death
            <b-icon-emoji-dizzy />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    deaths () {
      return this.$store.state.totalDeaths
    }
  },
  created () {
    this.$store.dispatch('getCountDeaths')
  }
}
</script>
