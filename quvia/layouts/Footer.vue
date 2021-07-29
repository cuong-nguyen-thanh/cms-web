<template>
  <div>
    <footer class="footer-top-area pt-100 pb-70">
      <div class="container">
        <div
          class="row"
          v-if="footer !== null"
        >
          <div class="col-lg-3 col-md-6">
            <div class="single-widget contact">
              <h3>
                {{ footer.title }}
              </h3>

              <ul>
                <li class="pl-0">
                  <a href="https://t.me/joinchat/9bND3ZH32pgzMTVl" target="_blank">
                    <i class="bx bxl-telegram"></i>
                    <span>Telegram:</span>
                    RepubliK Official Group
                  </a>
                </li>

                <li class="pl-0">
                  <a :href="`mailto:${footer.email}`">
                    <i class="bx bx-envelope"></i>
                    <span>Email:</span>
                    {{ footer.email }}
                  </a>
                </li>

                <li>
                  <i class="bx bx-location-plus"></i>
                  <span>Address:</span>
                  {{ footer.address }}
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="single-widget">
              <h3>{{ footer.titleOne }}</h3>

              <ul>
                <li
                  v-for="service in footer.services"
                  :key="service.id"
                >
                  <a :href="`/whitepaper/${service.text.split('|')[1]}`">
                    <i :class="service.icon"></i>
                    {{ service.text.split('|')[0] }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="single-widget">
              <h3>{{ footer.titleTwo }}</h3>

              <ul>
                <li
                  v-for="support in footer.supports"
                  :key="support.id"
                >
                  <a :href="`/whitepaper/${support.text.split('|')[1]}`">
                    <i :class="support.icon"></i>
                    {{ support.text.split('|')[0] }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="single-widget">
              <h3>{{ footer.titleThree }}</h3>

              <ul>
                <li
                  v-for="quick in footer.quicks"
                  :key="quick.id"
                >
                  <a :href="`/whitepaper/${ quick.text.split('|')[1]}`">
                    <i :class="quick.icon"></i>
                    {{ quick.text.split('|')[0] }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer class="footer-bottom-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copy-right">
              <p>
                Copyright @2021 Republik
              </p>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="condition-privacy">
              <ul>
                <li>
                  <NuxtLink to="/terms-conditions">
                    Terms & Condition
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/privacy-policy">
                    Privacy Policy
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <back-to-top bottom="50px" right="50px">
      <div class="go-top">
        <i class='bx bx-chevrons-up'></i>
        <i class='bx bx-chevrons-up'></i>
      </div>
    </back-to-top>
  </div>
</template>

<script>

export default {
  name: 'Footer',

  data() {
    return {
      footer: null
    }
  },

  created: async function () {
    this.footer = await this.$strapi.find('footer')
  }
}
</script>

<style scoped>
.footer-top-area ul {
  list-style: none;
  padding: 0;
}
</style>
