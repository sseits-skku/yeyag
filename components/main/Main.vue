<template lang="pug">
  v-container(fill-height fluid app)
    v-row
      v-col(class="px-0" cols="12")
        v-card(height="100px" color="grey lighten-3")
          v-card-title(
            class="pa-0 align-center justify-center fill-width fill-height"
          ).Noto 성균관대학교 반도체시스템공학과 예약 서비스입니다.
      v-row
        v-col(cols="8")
          v-card(class="fill-width fill-height" color="grey lighten-3")
            v-card-title(
              class="align-center justify-center fill-width"
            ).Noto 세미나실 예약 현황
            v-card-text
              v-card(outlined height="300px")
                Calendar
        v-col(cols="4")
          v-card(class="fill-width fill-height" color="grey lighten-3")
            v-card-title.Noto(class="align-center justify-center fill-width") 예약 수칙
            v-card-text.Noto
              ol
                li 세미나실은
                  b 신청자 및 동반자 모두 회원만
                  |  이용할 수 있습니다.
                li 예약은
                  b 7일 전부터 가능
                  | 하며, 30분 단위로 가능합니다.
                | (오전 9시 기준)
                li 사용 시
                  b 반드시 행정실을 방문하여 확인증을 받아간 뒤
                  |  사용합니다.
                i  확인증 미수령시 예약이 취소될 수 있습니다.
                li 사용 후, 다음 사람을 위해
                  b  자리를 정돈합시다
                  |.
              ul
                li
                  i 이용수칙 미 준수시 차후 예약에 불이익을 받을 수도 있습니다.
        v-col(cols="8")
          v-card(class="fill-width fill-height" color="grey lighten-3")
            v-card-title(
              class="align-center justify-center fill-width"
            ).Noto 학생증 등록 예약 현황
            v-card-text
              v-card(outlined height="300px")
                Calendar
        v-col(cols="4")
          v-card(class="fill-width fill-height" color="grey lighten-3")
            v-card-title.Noto(class="align-center justify-center fill-width") 예약 수칙
            v-card-text.Noto
              ol
                li 신규 등록은 왼쪽 아래
                  b  '회원가입' 버튼
                  | 을 눌러 회원가입 신청해 주세요.
                li 이미 회원인 경우,
                  b  '학생증 등록 예약'
                  | 을 눌러 예약해 주세요.
                li 학생증 등록 가능한 카드는
                  b  학생증으로 한정
                  | 됩니다.
                  br
                  i 이는 학과장님 지시사항이므로 필히 엄수해 주시기 바랍니다.
              ul
                li
                  i 안내드린 시각에 반도체관 400209호로 방문해 주시면 됩니다.
</template>

<script>
import Calendar from '@/components/calendar/Calendar'
export default {
  components: {
    Calendar
  }
}
</script>

<style scoped>
</style>
