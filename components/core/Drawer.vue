<template lang="pug">
  v-navigation-drawer(
    app
    permanent
    src="/img/navbackground.png"
    min-width="280px"
  )
    v-img(class="ma-2" src="/img/logo_title.png" @click.native="$router.push('/')")
    div.Noto.Center.NavText(class="mb-10" @click.native="$router.push('/')") 반도체시스템공학과
    v-list(
      flat
    )
      v-list-item-group
        v-divider
        v-list-item(@click.native="$router.push('/')")
          v-list-item-icon
            v-icon mdi-home
          v-list-item-content
            v-list-item-title 메인으로
        v-divider
        v-subheader 세미나실 예약
        v-list-item(@click.native="$router.push('/seminar')")
          v-list-item-icon
            v-icon mdi-account-group-outline
          v-list-item-content
            v-list-item-title 세미나실 예약
        v-list-item(@click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-frequently-asked-questions
          v-list-item-content
            v-list-item-title 세미나실 예약 문의
        v-list-item(v-if="$store.state.auth.isAdmin === true" @click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-monitor-dashboard
          v-list-item-content
            v-list-item-title 세미나실 예약 관리
        v-divider
        v-subheader 학생증 등록 예약
        v-list-item(@click.native="$router.push('/card')")
          v-list-item-icon
            v-icon mdi-account-badge-horizontal-outline
          v-list-item-content
            v-list-item-title 학생증 등록 예약
        v-list-item(@click.native="$router.push('/card/ask')")
          v-list-item-icon
            v-icon mdi-account-question-outline
          v-list-item-content
            v-list-item-title 학생증 등록 문의
        v-list-item(v-if="$store.state.auth.isAdmin === true" @click.native="$router.push('/seminar/ask')")
          v-list-item-icon
            v-icon mdi-monitor-dashboard
          v-list-item-content
            v-list-item-title 학생증 등록 관리
    template(v-slot:append)
      div(
        v-if="$store.state.auth.loginId === ''"
        class="px-2 pb-2"
      )
        v-btn(color="primary" block @click.native="$router.push('/add')")
          v-icon(left) mdi-clipboard-text-outline
          | 회원가입
      div(
        v-if="$store.state.auth.loginId === ''"
        class="px-2 pb-2"
      )
        v-btn(color="secondary" block @click="openDialog")
          v-icon(left) mdi-lock-open
          | 로그인하기
      div(
        v-if="$store.state.auth.loginId !== ''"
        class="px-2 pb-2"
      )
        v-btn(color="primary" block @click="logout")
          v-icon(left) mdi-logout-variant
          | 로그아웃
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
