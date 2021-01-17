<template>
    <div class="samsung-special-more">
        <div class="samsung-special-more__label" v-html="title"></div>
        <a class="samsung-special-more__button" v-html="button" v-if="link" :href="link" target="_blank" />
        <a class="samsung-special-more__button" v-html="button" v-if="!link" />
    </div>
</template>

<script>

export default {
  name: 'AdditionalInfo',
  props: {
    title: String,
    button: String,
    link: String,
  },
  components: {

  },
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus">
.samsung-special-more
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
