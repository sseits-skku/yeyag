<template lang="pug">
  v-navigation-drawer(
    app
    permanent
    mini-variant
    src="/img/navbackground.png"
    width="80px"
  )
    v-img(class="ma-2" src="/img/logo.jpg" @click.native="$router.push('/')")
    v-list(class="pt-0" flat)
      v-list-item-group
        v-divider
        v-list-item(@click.native="$router.push('/')")
          v-list-item-icon
            v-icon mdi-home
        v-divider
        v-list-item(@click.native="$router.push('/seminar')")
          v-list-item-icon
            v-icon mdi-account-group-outline
          v-list-item-content
        v-list-item(@click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-frequently-asked-questions
        v-list-item(v-if="$store.state.auth.isAdmin === true" @click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-monitor-dashboard
        v-divider
        v-list-item(@click.native="$router.push('/card')")
          v-list-item-icon
            v-icon mdi-account-badge-horizontal-outline
        v-list-item(@click.native="$router.push('/card/ask')")
          v-list-item-icon
            v-icon mdi-account-question-outline
        v-list-item(v-if="$store.state.auth.isAdmin === true" @click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-monitor-dashboard
    template(v-slot:append)
      div(
        v-if="$store.state.auth.loginId === ''"
        class="px-2 pb-2"
      )
        v-btn(color="" block @click.native="$router.push('/add')")
          v-icon mdi-clipboard-text-outline
      div(
        v-if="$store.state.auth.loginId === ''"
        class="px-2 pb-2"
      )
        v-btn(color="green accent-3" block @click="openDialog")
          v-icon mdi-lock-open
      div(
        v-if="$store.state.auth.loginId !== ''"
        class="px-2 pb-2"
      )
        v-btn(color="secondary" block @click="logout")
          v-icon mdi-logout-variant
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    dOpen: {
      get () { return this.$store.state.drawerOpen },
      set (value) { this.$store.commit('setDrawerOpen', value) }
    },
    dPerm: {
      get () { return this.$store.state.drawerPerm },
      set (value) { this.$store.commit('setDrawerPerm', value) }
    }
  },
  methods: {
    logout () {
      this.$store.commit('auth/logout')
    },
    openDialog () {
      this.$store.commit('setLoginDialogOpen', true)
    },
    goPage (id) {
      this.$router.push(id)
    }
  }
}
</script>

<style scoped>
.NavText {
  color: #75777b;
  font-size: 1.8rem;
  font-weight: bolder;
}
</style>
