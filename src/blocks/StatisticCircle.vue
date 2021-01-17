<template>
  <svg viewBox="0 0 36 36" class="samsung-special__chart">
    <path class="samsung-special__chart--bg"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path class="samsung-special__chart--circle" v-if="value > 0"
      :stroke-dasharray='[value, percents]'
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="18" y="20.35" class="samsung-special__chart--percentage" v-html="value + '%'"></text>
  </svg>
</template>

<script>
export default {
  name: 'StatisticCircle',
  props: {
    value: {
      type: Number,
      default: 20,
    },
    percents: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style lang="stylus">
  .samsung-special__chart
    display: block;
    max-height: 168px;

    &--bg
      fill: none;
      stroke: #DFBEC3;
      stroke-width: 2.6px;

    &--circle
      fill: none;
      stroke-width: 2.6px;
      stroke: #E25A76;
      animation: progress 1s ease-out forwards;
    &--percentage
      fill: #000;
      font-family: 'Roboto', sans-serif
      font-weight: bold;
      font-size: 0.55em;
      text-anchor: middle;
  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }


</style>
