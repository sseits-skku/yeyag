<template lang="pug">
  v-app
    Login
    Drawer(v-if="$vuetify.breakpoint.mdAndUp")
    MiniDrawer(v-if="$vuetify.breakpoint.smAndDown")
    v-content
      v-container(fluid fill-height)
        nuxt
    Footer
    Snackbar
</template>

<script>
import MiniDrawer from '@/components/core/MiniDrawer'
import Snackbar from '@/components/core/Snackbar'
import Drawer from '@/components/core/Drawer'
import Footer from '@/components/core/Footer'
import Login from '@/components/core/Login'

export default {
  components: {
    MiniDrawer,
    Snackbar,
    Drawer,
    Footer,
    Login
  },
  data () {
    return {
      drawer: false,
      dialog: false,
      isauth: false
    }
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  mounted () {
    this.$store.dispatch('auth/checkLogin')
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      if (this.$vuetify.breakpoint.name === 'xs') {
        this.$store.commit('setDrawerPerm', false)
      } else {
        this.$store.commit('setDrawerPerm', true)
        this.$store.commit('setDrawerOpen', true)
      }
    }
  },
  head () {
    return this.$store.state.auth.auth === null
      ? { title: '반도체시스템공학과 예약 페이지' }
      : { title: '예약 관리 페이지' }
  }
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
.Noto {
  font-family: "Noto Sans KR", sans-serif !important;
}
.Center {
  text-align: center;
}
</style>
