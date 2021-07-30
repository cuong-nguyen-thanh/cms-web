<template>
  <div>
    <footer class="footer-top-area">
      <client-only>
        <div class="container">
          <div class="row">
            <div class="col-12 footer-logo">
              <img src="~/assets/images/logo_footer.png" alt="footer">
            </div>
            <div class="col-12 footer-line">
              <p>The Next-Generation Creator Platform, Powered By Blockchain Technology</p>
            </div>

            <div class="col-12 footer-line">
              <ul>
                <li>
                  <NuxtLink to="/whitepaper/problem">
                    <i class='bx bx-file'></i>
                    &nbsp;Whitepaper
                  </NuxtLink>
                </li>
                <li>
                  <a href="https://t.me/joinchat/9bND3ZH32pgzMTVl" target="_blank">
                    <i class='bx bxl-telegram'></i>
                    &nbsp;Telegram
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </client-only>
    </footer>

    <footer class="footer-bottom-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 copy-right">
              <p>
                Copyright ©2021 Rad RepubliK Pte Ltd.
              </p>
          </div>
        </div>
      </div>
    </footer>
    <client-only>
    <back-to-top bottom="50px" right="50px">
      <div class="go-top">
        <i class='bx bx-chevrons-up'></i>
        <i class='bx bx-chevrons-up'></i>
      </div>
    </back-to-top>
    </client-only>
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
