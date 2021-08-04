<template>
  <div class="banner-area-six">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="banner-text">
            <span>WELCOME TO REPUBLIK</span>
            <h1>The next-generation creator platform, powered by blockchain technology</h1>
            <p>A scalable ecosystem, built from the ground up, to equitably distribute value by giving everyone a stake
              in the economy.</p>

            <div class="banner-btn wow fadeInUp" data-wow-delay="1s">
              <NuxtLink class="default-btn six" to="/whitepaper/problem">
                Read Whitepaper
              </NuxtLink>
              <GetUpdates></GetUpdates>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="banner-img">
            <img src="~/assets/images/landing.jpg" alt="Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GetUpdates from '../../components/Common/GetUpdates'

export default {
  name: 'Banner',
  components: {
    GetUpdates
  }
}
</script>
