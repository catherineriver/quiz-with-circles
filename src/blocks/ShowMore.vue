<template>
    <div class="samsung-special-promo" ref="samsungAbout">
        <div class="samsung-special-promo__header">Работайте везде с <a href="https://clck.ru/QgQSB" target="_blank">Galaxy Note 20 Ultra</a></div>
        <div class="samsung-special-promo__layout">
            <div class="samsung-special-promo__content">
                <div class="samsung-special-promo__item">
                    <div class="samsung-special-promo__title">
                        <icon-base icon-name='writting' width="41" height="41">
                            <icon-writting></icon-writting>
                        </icon-base>
                        <div class="samsung-special-promo__subtitle">Офисные программы<br>в смартфоне</div>
                    </div>

                    <div class="samsung-special-promo__desc">Работайте в такси, командировках и путешествиях. Делайте наброски с помощью электронного пера S Pen и превращайте рукописный текст в печатный.</div>
                </div>

                <div class="samsung-special-promo__item">
                    <div class="samsung-special-promo__title">
                        <icon-base icon-name='clapperboard' width="43" height="40">
                            <icon-clapperboard></icon-clapperboard>
                        </icon-base>
                        <div class="samsung-special-promo__subtitle">Киностудия<br>у&nbsp;вас&nbsp;в&nbsp;руках</div>
                    </div>

                    <div class="samsung-special-promo__desc">Лучшие инструменты профессиональных фотографов, операторов и видеомонтажёров. Съёмка видео в 8K, гибридный оптический зум, фото в качестве 108 Мп и высококачественная стабилизация. Полный контроль над видео с помощью ISO, управления скоростью затвора и ручной фокусировки.</div>
                </div>

                <div class="samsung-special-promo__item">
                    <div class="samsung-special-promo__title">
                        <icon-base icon-name='chip' width="41" height="41">
                            <icon-chip ></icon-chip>
                        </icon-base>
                        <div class="samsung-special-promo__subtitle">Мощный смартфон<br>с&nbsp;функциями компьютера</div>
                    </div>

                    <div class="samsung-special-promo__desc">До 12 ГБ оперативной памяти и быстрый процессор Exynos 990 для многозадачной работы и полноценного отдыха. Стриминг, игры и редактирование видео с невероятной скоростью.</div>
                </div>

                <div class="samsung-special-promo__item">
                    <div class="samsung-special-promo__title">
                        <icon-base icon-name='battery'>
                            <icon-battery></icon-battery>
                        </icon-base>
                        <div class="samsung-special-promo__subtitle">Аккумулятор на целый день интенсивной работы</div>
                    </div>

                    <div class="samsung-special-promo__desc">Интеллектуальный аккумулятор емкостью 4500 м*Ач&nbsp;&mdash; хватит не&nbsp;только на&nbsp;весь рабочий день, но&nbsp;и&nbsp;на&nbsp;развлечения вечером. В&nbsp;дополнение к&nbsp;этому&nbsp;&mdash; быстрая зарядка: 50% за&nbsp;полчаса.</div>
                </div>

            </div>
            <div class="samsung-special-promo__images">
                <div class="samsung-special-promo__column">
                    <img class="samsung-special-promo__image" src="https://leonardo.osnova.io/d45b90e1-a4ed-3c8f-20b9-bf89e96c919a/" alt="">
                </div>
                <div class="samsung-special-promo__aside">
                    <img class="samsung-special-promo__image" src="https://leonardo.osnova.io/af24d841-2723-a12d-134b-12a69093a65c/" alt="">
                    <img class="samsung-special-promo__image" src="https://leonardo.osnova.io/642fcf72-d4e1-ea5c-c2f0-310d0a3c6ece/" alt="">
                </div>
            </div>
            <div class="samsung-special-promo__footer"> <a href="https://clck.ru/QgQSB" target="_blank">Samsung Galaxy Note 20 Ultra</a> — это часть экосистемы Samsung вместе с планшетом <a href="https://clck.ru/QqZYV" target="_blank">Galaxy Tab S7</a>, <a href="https://clck.ru/QqZZW" target="_blank">Galaxy Watch3</a> и беспроводными наушниками <a href="https://clck.ru/QqZZn" target="_blank">Galaxy Buds Live</a>.</div>
        </div>
        <SubscribeBlock />
    </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconWritting from './icons/IconWritting.vue';
import IconBattery from './icons/IconBattery.vue';
import IconClapperboard from './icons/IconClapperboard.vue';
import IconChip from './icons/IconChip.vue';
import MockData from '../api/mock/mockData';
import SubscribeBlock from './SubscribeBlock.vue';

export default {
  name: 'ShowMore',
  props: {

  },
  components: {
    IconWritting,
    IconBattery,
    IconClapperboard,
    IconChip,
    IconBase,
    SubscribeBlock,
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

      scrollToElement(this.$refs.samsungAbout);
    });
  },
  data() {
    return {
      data: MockData,
    };
  },
};
</script>

<style lang="stylus">
.samsung-special-promo
    &__layout
        display flex
        flex-flow: row wrap;
        @media (max-width: 640px)
            flex-flow: column nowrap;
    &__content
        max-width: 322px;
        @media (max-width: 640px)
            max-width: none;
    &__header
        margin: 18px 0 30px;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        order: 1;
        &>a
            color: #2b5e8c
            text-decoration: underline
            &:hover
                cursor pointer

    &__subtitle
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        margin-left: 18px;
    &__desc
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        margin-top: 12px;
    &__title
        display flex
        flex-flow row nowrap
        align-items center
    &__footer
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 27px;
        order: 3;
        @media (max-width: 640px)
            order: 2;
        & a
            display inline-block
            color: #2b5e8c
            text-decoration: underline
            &:hover
                cursor pointer
    &__item
        margin-bottom: 27px
        &:last-child
            margin-bottom: 22px;
    &__images
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        margin-left: 44px;
        max-width: 215px;
        margin-top: 5px;
        flex-shrink: 0;
        order: 2;
        & img
            margin-bottom: 27px
        @media (max-width: 640px)
            margin 0
            max-width none
            flex-flow: row nowrap;
            align-items: start;
            order: 3;
    &__image
        display block
        width: 100%
    &__aside
        @media (max-width: 640px)
            margin-left: 32px;


</style>
