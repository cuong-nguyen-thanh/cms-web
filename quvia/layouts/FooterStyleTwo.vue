<template>
  <footer class="footer-area pt-100 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <h3>REPUBLIK</h3>

            <ul class="address">
              <li class="location">
                <span>Address:</span>
                2750 Aaa Street Bbb, Ccc.
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:support@republik.com">support@republik.com</a>
              </li>
              <li>
                <span>Phone:</span>
                <a href="tel:+01-234-567890">+01 234 567890</a>
              </li>
              <li>
                <span>Fax:</span>
                <a href="tel:+01-234-567890">+01 234 567890</a>
              </li>
            </ul>

            <ul class="social-icon">
              <li>
                <a href="https://t.me/joinchat/9bND3ZH32pgzMTVl">
                  <i class="bx bxl-telegram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <h3>Whitepaper</h3>

            <ul class="import-link">
              <li>
                <a href="#">Problem</a>
              </li>
              <li>
                <a href="#">Opportunity</a>
              </li>
              <li>
                <a href="#">Introduction</a>
              </li>
              <li>
                <a href="#">The RAD Token</a>
              </li>
              <li>
                <a href="#">Exposure and Talent Discovery</a>
              </li>
              <li>
                <a href="#">Virtual Event Platform</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6">
          <div class="single-footer-widget">
            <h3>Whitepaper</h3>

            <ul class="import-link">
              <li>
                <a href="#">Creator Journey</a>
              </li>
              <li>
                <a href="#">Keeping creators on platform</a>
              </li>
              <li>
                <a href="#">Market-entry</a>
              </li>
              <li>
                <a href="#">Distribution</a>
              </li>
              <li>
                <a href="#">Release Schedule</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'FooterStyleTwo',

  data() {
    return {
      logo: null
    }
  },

  created: async function () {
    this.logo = await this.$strapi.find('sitelogo')
  }
}
</script>
