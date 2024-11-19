<script lang="ts" setup>
import { useData } from 'vitepress'

const { lang } = useData()
// const route = useRoute()

</script>
<template>
  <div class="not-found">
    <img class="image" src="/images/not-found.png" alt="">
    <p class="sub-title"> {{ lang === 'fa' ? 'صفحه مورد نظر پیدا نشد' : 'PAGE NOT FOUND' }} </p>
    <p class="quote"> {{ lang === 'fa' ? `صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابجا شده است.` : `The page you are
      looking for does not exist or has been moved.` }} </p>
    <div class="action">
      <a :href="lang === 'fa' ? '/fa/guides' : '/en/guides'" class="link">{{ lang === 'fa' ? 'برگشتن به صفحه اصلی' : 'Go to home' }}</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.not-found {
  min-height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  max-width: 100%;
  overflow-x: hidden;
  line-height: 1;

  img{
    width: 100%;
    max-width: 350px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .sub-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .quote {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .link {
    display: inline-block;
    border: 1px solid var(--vp-c-brand-1);
    border-radius: 16px;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    transition: border-color .25s, color .25s;
    min-height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
