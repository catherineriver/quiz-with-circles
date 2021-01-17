<template>
    <div class="samsung-special-result" ref="samsungResult">
        <div class="samsung-special-result__header">Так ответили другие:</div>
        <ResultStatistic :data={statisticLabels} :value="value"/>
        <div class="samsung-special-result__content">
            <div class="samsung-special-result__title" v-html="data.title"></div>
            <div class="samsung-special-result__subtitle" v-html="data.subtitle"></div>
            <div class="samsung-special-result__desc" v-html="data.desc"></div>
            <div class="samsung-special-result__inner">
                <div class="samsung-special-result__imageContainer">
                    <img src="https://leonardo.osnova.io/fdd22700-95f3-a735-0947-becccd22009c/" alt="" class="samsung-special-result__image">
                </div>
                <a class="samsung-special-result__button"
                    href="https://clck.ru/QgQSB"
                    target="_blank"
                    @click="sendAnalitycs('to-shop')"
                >Посмотреть на сайте</a>
                <a href="https://clck.ru/QqZbk" target="_blank" class="samsung-special-result__logo">
                    <icon-base icon-name='samsung-logo' width="125" viewBox="0 0 125 37">
                        <icon-samsung></icon-samsung>
                    </icon-base>
                </a>
            </div>
        </div>
        <div class="samsung-special-more" v-if="!isShowMore">
            <div class="samsung-special-more__label"><span>Работайте везде</span> с&nbsp;Galaxy&nbsp;Note 20 Ultra</div>
            <button class="samsung-special-more__button" @click="showMore">Узнать</button>
        </div>

        <ShowMore v-if="isShowMore"/>

        <div class="samsung-special-more">
            <div class="samsung-special-more__label"><span>Сдайте</span> старый телефон <span>и&#160;получите скидку</span></div>
            <a class="samsung-special-more__button" href="https://clck.ru/QgQUs" target="_blank" @click="sendAnalitycs('trade-in')">Считать</a>
        </div>

    </div>
</template>

<script>
import * as Analytics from '../lib/analytics';
import ResultStatistic from './ResultStatistic.vue';
import MockData from '../api/mock/mockData';
import ShowMore from './ShowMore.vue';
import IconBase from './IconBase.vue';
import IconSamsung from './icons/IconSamsung.vue';

export default {
  name: 'Result',
  props: {
    data: Object,
    value: Object,
  },
  components: {
    ResultStatistic,
    ShowMore,
    IconSamsung,
    IconBase,
  },
  data() {
    return {
      statisticLabels: MockData.statistic,
      isShowMore: false,
    };
  },
  methods: {
    showMore(isShowMore) {
      if (isShowMore) {
        this.isShowMore = true;
        Analytics.sendEvent('learn', 'Click');
      }
    },
    sendAnalitycs(label) {
      Analytics.sendEvent(label, 'Click');
    },
  },
  mounted() {
    setTimeout(() => {
      const scrollTo = (to, duration) => {
        const start = window.pageYOffset;
        const change = to - start;
        let currentTime = 0;
        const increment = 20;

        const animateScroll = () => {
          currentTime += increment;
          const val = Math.easeInOutQuad(currentTime, start, change, duration);
          window.scroll(0, val);
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      };

      Math.easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t -= 1;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scrollToElement = (ref) => {
        scrollTo(ref.getBoundingClientRect().top + window.scrollY - 60, 500);
      };

      scrollToElement(this.$refs.samsungResult);
    });
  },
};
</script>

<style lang="stylus">
.samsung-special-result
    &__content

        padding: 26px 0 26px;
        margin: 0 15px;
        position relative
        @media (max-width: 420px)
            padding: 0
            margin: 0
        &::after
            content: ''
            position absolute
            top: -15px
            left: 0
            right: 0
            bottom: 0
            background: #FFF5F7;
            z-index -1
            margin: 0 -35px;

    &__grid
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: row wrap;
    &__item
        width:33.333%
        @media (max-width: 420px)
            width:50%
    &__image
        width 100%
        display block
    &__label
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        margin-bottom: 48px;
        @media (max-width: 420px)
            margin-bottom: 20px;
            margin-top: 18px;
            height: 44px;


    &__subtitle
        margin-top: 18px;
        margin-bottom: 25px;
    &__header
        font-weight: bold;
        text-align: center;
        font-size: 22px;
        line-height: 22px;
        margin: 22px 0 36px;
        @media (max-width: 420px)
            margin: 30px 0 24px;

    &__title
        font-weight: bold;
        font-size: 22px;
        line-height: 22px;

    &__subtitle
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
    &__imageContainer
        max-width 410px
        margin 44px auto 50px
        @media (max-width: 420px)
            margin: 24px auto 26px
    &__inner
        display flex
        flex-flow column nowrap
        align-items: center
    &__button
        background: #0F218B;
        border-radius: 5px;
        color: #ffffff
        font-weight: 500;
        font-size: 18px;
        line-height: 20px;
        padding 15px 35px
        border: none;
        outline: none
        text-decoration: none
        transition: background ease-out 0.1s, color ease-out 0.1s;
        &:hover
            cursor pointer
            background: rgba(15 33 139, 0.9);
            @media (max-width: 420px)
                background: #0F218B;
                color: #ffffff

        &:focus
            outline: none


    &__logo
        width: 125px
        margin: 20px 0;
        @media (max-width: 420px)
            margin: 20px 0 28px;
    &__desc
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        & > a
          color: #2b5e8c
          text-decoration: underline
          &:hover
            cursor pointer

.samsung-special-more
    background #ffffff
    display flex
    flex-flow: row nowrap
    align-items center
    justify-content: space-between;
    background: #FFF5F7;
    border-radius: 10px;
    padding: 10px 20px;
    line-height: 26px;
    margin-top: 20px
    @media (max-width: 420px)
        padding: 7px 20px;
    &__label
        font-weight: bold;
        font-size: 19px;
        line-height: 22px;
        margin-right: 10px;
        @media (max-width: 420px)
            font-size: 16px;
            max-width: 142px;
            span
                display: block

    &__button
        font-family: 'Roboto', sans-serif
        text-align: center;
        min-width: 108px;
        color: #000
        font-weight: 500;
        font-size: 15px;
        line-height: 40px;
        padding: 0 25px
        background: #FFFFFF;
        box-shadow: inset 0px 0px 0px 1px rgba(226,90,118,1)
        border: none;
        box-sizing: border-box;
        border-radius: 5px;
        transition: background ease-out 0.1s, color ease-out 0.1s;
        text-decoration: none
        &:hover
            cursor pointer
            background: rgba(226,90,118,1);
            color: #fff
        &:focus
            outline: none
        @media (max-width: 420px)
            padding: 0 15px
            min-width: 88px;

</style>
