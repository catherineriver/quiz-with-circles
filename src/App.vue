<template>
  <div :class="[
          'samsung-special',
          'l-mb-28 lm-mb-20',
          `samsung-special--${$store.state.params.location}`,
          `samsung-special--${$store.state.params.site}`,
          {'samsung-special--bg': addBackground}
      ]"
      v-observe-visibility="{
          callback: visibilityChanged,
          once: true,
      }">
    <div class="samsung-special__container l-island-a" >
      <div class="samsung-special__intro">
        <div class="samsung-special__title">
          Выберите идеальное место для работы
          <div class="samsung-special__subtitle" v-html="data.locations[itemKey].title"></div>
        </div>
        <div class="samsung-special__imageContainer">
          <div class="samsung-special__image" :style="{ backgroundImage: 'url(\'' + data.locations[itemKey].image + '\')' }"></div>
        </div>
        <div class="samsung-special__actions" v-if="!isHideButtons">
          <div class="samsung-special__buttons">
            <button class="samsung-special__button" @click="nextItem">Ещё</button>
            <button class="samsung-special__button" @click="showStatistic">Это оно</button>
          </div>
          <div class="samsung-special__statistic" v-if="isShow">
              <StatisticCircle :value="statisticResult.votes[data.locations[itemKey].key]" />
              <div
                class="samsung-special__peopleCount"
                v-html="statisticResult.votes[data.locations[itemKey].key] + '% выбрали это место'"
              />
          </div>
        </div>
      </div>
      <Result v-if="isShowResult" :data="data.locations[itemKey]" :value="statisticResult.votes"/>
    </div>
  </div>
</template>


<script>
import * as Analytics from './lib/analytics';
import MockData from './api/mock/mockData';
import StatisticCircle from './blocks/StatisticCircle.vue';
import Result from './blocks/Result.vue';
import request from './lib/request';

export default {
  name: 'App',
  data() {
    return {
      data: MockData,
      isShow: false,
      isShowResult: false,
      isHideButtons: false,
      itemKey: 0,
      statisticResult: {
        votes: {},
      },
      addBackground: false,
      value: Object,
    };
  },
  methods: {
    nextItem() {
      if (this.itemKey <= 4) {
        Analytics.sendEvent('more', 'Click');
        this.itemKey += 1;
        this.$emit('increment');
      } else {
        this.itemKey = 0;
      }
    },
    visibilityChanged(isVisible) {
      if (isVisible) {
        Analytics.sendEvent('Project', 'Show');
      }
    },
    showStatistic(isShow) {
      request(`/special/remote-or-not/vote/${this.itemKey + 1}`, 'POST')
        .then((res) => {
          const jsonData = JSON.parse(res);
          this.statisticResult = jsonData.data;
          if (isShow) {
            this.isShow = true;
            Analytics.sendEvent('here', 'Click');
            setTimeout(() => {
              this.isHideButtons = true;
            }, 1500);
            setTimeout(() => {
              this.isShowResult = true;
            }, 1500);
          }
        }).catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    },
  },
  mounted() {
    const preloadImages = (urls) => Promise.all(urls.map((url) => new Promise(((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.src = url;
    }))));
    preloadImages([
      'https://leonardo.osnova.io/faa5c526-d465-9fea-9157-b435f7a8f0b5/',
      'https://leonardo.osnova.io/b64f102b-b8e7-804e-5c08-fbd7b57436e9/',
      'https://leonardo.osnova.io/ae694ccf-68b3-6c45-37e2-8e383b402748/',
      'https://leonardo.osnova.io/65526cc2-907a-4364-0947-fbf55d517a75/',
      'https://leonardo.osnova.io/cd5487bc-a2ff-9a86-ab25-225aa225fb79/',
      'https://leonardo.osnova.io/fdd22700-95f3-a735-0947-becccd22009c/',
      'https://leonardo.osnova.io/d45b90e1-a4ed-3c8f-20b9-bf89e96c919a/',
      'https://leonardo.osnova.io/af24d841-2723-a12d-134b-12a69093a65c/',
      'https://leonardo.osnova.io/642fcf72-d4e1-ea5c-c2f0-310d0a3c6ece/',
    ]);
  },
  created() {
    const currentUrl = window.location.pathname;
    if (currentUrl === '/special/remote-or-not') {
      this.addBackground = true;
    }
  },
  components: {
    StatisticCircle,
    Result,
  },
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body
  margin 0 !important

.samsung-special
  border-radius: 8px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative
  z-index: 1;
  max-width: 100%
  font-family: 'Roboto', sans-serif
  font-size: 16px
  line-height: normal
  text-size-adjust: 100%
  overflow: hidden
  background-color: rgba(255,235,239, .5);
  padding: 20px 0

  &.samsung-special--bg
    min-height: 100vh;
    display: flex;
    overflow: visible;
    box-sizing: border-box;
    margin-bottom: 0;
    background-color: rgba(255,235,239, .5);

    @media (max-width: 420px)
      overflow: hidden;

  &.samsung-special--bg::after
    background-image: url(https://leonardo.osnova.io/e76ca66f-5078-5969-7b7e-dbb2639bbe1f/);
    background-size: 30px 30px
    opacity: 0.35;
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    content: ''
    z-index: -1

  &.samsung-special--bg .samsung-special__container
    margin-top: auto;
    margin-bottom: auto;
    padding: 20px;
    box-shadow: 0px 5px 10px -3px #A86F7B;
    border-radius: 10px;
    z-index: 0;
    background-color: #FFEBEF

  & *
  & *:before
  & *:after
    box-sizing: border-box

  & svg
    display block
    fill currentColor
    pointer-events none
    flex-shrink: 0;

  & b
    font-weight: 700
  &--vc
    background-color:  #FFEBEF
  &__button
    font-family: 'Roboto', sans-serif
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    padding: 7px 25px
    background: #FFFFFF;
    box-shadow: inset 0px 0px 0px 1px rgba(226,90,118,1);
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    transition: background ease-out 0.1s, color ease-out 0.1s;
    &:hover
      cursor pointer
      background: rgba(226,90,118,1);
      color: #fff
      @media (max-width: 420px)
        background: #FFFFFF;
        color: #000000

    &:focus
      outline: none

    @media (max-width: 420px)
      width: 50%
  & button+button
    margin-left 10px
    @media (max-width: 420px)
      margin-left 15px

  &__container
    width: 640px
    max-width: 100%
    margin: 0 auto
    padding: 0 15px
    @media (max-width: 420px)
      padding: 0 20px
      width: 100%
  &__title
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;

    @media (max-width: 420px)
      font-size: 20px;
      line-height: 26px;
  &__subtitle
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    margin-top: 22px;
    transition: display .05s ease;
    @media (max-width: 420px)
      font-size: 15px;
      margin-top: 10px;
  &__imageContainer
    max-width: 600px
    margin-top: 15px
    margin-bottom: 22px
    @media (max-width: 420px)
      margin-top: 10px

  &__image
    background-size: cover;
    height: 194px;
    display: block;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 10px;
    transition: background-image .3s ease;
    @media (max-width: 420px)
      height: 142px;
  &__actions
    display flex
    flex-flow: row nowrap
    align-items: center;
    @media (max-width: 420px)
      flex-flow: column nowrap
  &__buttons
    display flex
    flex-flow: row nowrap
    align-items: center;
    flex-grow 1
    @media (max-width: 420px)
      width: 100%
  &__statistic
    flex-grow 1
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 420px)
      margin: 20px 0;
    & > .samsung-special__chart
      width: 40px;
      margin-right: 10px;
      & > text
        display none

  &__circle
    border-radius: 50%
  &__peopleCount
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

  &--tj
    background-color:  #fff4e2
  &--tj &__button,
  &--tj .samsung-special-more__button
    box-shadow: inset 0px 0px 0px 1px #EEA502;
    text-decoration: none
    &:hover
      background: #EEA502;
  &--tj .samsung-special__chart--bg
    stroke: #fadba6;
  &--tj .samsung-special__chart--circle
    stroke: #eea502;
  &--tj .samsung-special-result__content::after
    background: #fffaf1;
  &--tj .samsung-special-more
    background: #fffaf1;
  &--tj .samsung-special-subscribe
    background: #fffaf1;
  &--tj .samsung-special-subscribe::after
    background: #fffaf1;

</style>
