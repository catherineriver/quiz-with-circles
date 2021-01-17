<template>
    <div class="samsung-special-statistic">
        <div class="samsung-special-result__item" v-for="item in data.statisticLabels" :key="item.id">
            <StatisticCircle :value='value[item.key]' />
            <div class="samsung-special-result__label" v-html='item.place'></div>
        </div>
    </div>
</template>

<script>
import StatisticCircle from './StatisticCircle.vue';

export default {
  name: 'ResultStatistic',
  props: {
    data: Object,
    value: Object,
  },
  components: {
    StatisticCircle,
  },
};
</script>

<style lang="stylus">
.samsung-special-statistic
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0 14px;
    a
        display: block;
        text-decoration: none;
    @media (max-width: 420px)
        margin: 0;
    &__item
        width:33.333%

    &__label
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        margin-bottom: 48px;

    &__subtitle
        margin-top: 18px;
        margin-bottom: 25px;
    &__title
        font-weight: bold;
        font-size: 22px;
        line-height: 22px;
        text-align: center;
        margin: 22px 0 36px;
    &__subtitle
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
    &__imageContainer
        max-width 410px
        margin 50px auto
    &__inner
        display flex
        flex-flow column nowrap
        align-items: center
    &__button
        background: #0F218B;
        border-radius: 60px;
        color: #ffffff
        font-weight: 500;
        font-size: 18px;
        line-height: 50px;
        padding 0 35px
        border: none;
        outline: none
        transition: background ease-out 0.1s, color ease-out 0.1s;
        &:hover
            cursor pointer
            background: #fff;
            color: #0F218B
        &:focus
            outline: none
    &__logo
        width: 120px
        margin: 20px 0;
    &__desc
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;

.samsung-special-more
    background #ffffff
    display flex
    flex-flow: row nowrap
    align-items center
    justify-content: space-between;
    background: #FFF5F7;
    border-radius: 10px;
    padding: 0 20px;
    line-height: 60px;
    margin-top: 20px
    &__label
        font-weight: bold;
        font-size: 19px;

    &__button
        font-family: 'Roboto', sans-serif
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
        &:hover
            cursor pointer
            background: rgba(226,90,118,1);
            color: #fff
        &:focus
            outline: none

</style>
