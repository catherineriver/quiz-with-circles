<template>
    <div class="samsung-special-subscribe">
        <div class="samsung-special-subscribe__title">Подпишитесь, чтобы следить за новостями Samsung</div>
        <div class="samsung-special-subscribe__socials">
            <a class="samsung-special-subscribe__link"
                href="https://clck.ru/QgRPo"
                target="_blank"
                @click="sendAnalitycs('facebook')"
            >
                <icon-base icon-name="facebook" width="40" height="40">
                    <icon-facebook />
                </icon-base>
            </a>
            <a class="samsung-special-subscribe__link"
                href="https://clck.ru/QgRMm"
                target="_blank"
                @click="sendAnalitycs('vk')"
            >
                <icon-base icon-name="VK" width="40" height="40">
                    <icon-vkontakte />
                </icon-base>
            </a>
            <a class="samsung-special-subscribe__link"
                href="https://clck.ru/QgRNL"
                target="_blank"
                @click="sendAnalitycs('instagram')"
            >
                <icon-base icon-name="instagram" width="40" height="40">
                    <icon-instagram />
                </icon-base>
            </a>
        </div>

    </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconVkontakte from './icons/IconVkontakte.vue';
import IconInstagram from './icons/IconInstagram.vue';
import * as Analytics from '../lib/analytics';

export default {
  name: 'SubscribeBlock',
  components: {
    IconBase,
    IconFacebook,
    IconVkontakte,
    IconInstagram,
  },
  methods: {
    sendAnalitycs(label) {
      Analytics.sendEvent(label, 'Click');
    },
  },
};
</script>

<style lang="stylus">
  .samsung-special-subscribe
    padding: 20px 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    position relative
    &::after
        content: ''
        position absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: #FFF5F7;
        z-index -1
        margin: 0 -20px;
    &__title
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        margin-bottom 14px
        @media (max-width: 640px)
            text-align center
            margin-bottom: 20px;
    &__socials
        display flex
        align-items center
        justify-content center
    &__link
        margin 0 7px
        transition: opacity ease-out 0.1s;
        will-change: opacity;
        &:hover
            opacity: 0.8


</style>
