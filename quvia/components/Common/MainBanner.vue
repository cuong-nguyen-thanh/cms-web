<template>
  <div class="banner-area-six">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="banner-text">
            <template v-if="data">
                <template v-for="(title, i) in data.Titles">
                    <h1 v-if="title.Font_Size === 'Large'" :class="{'first-item-margin': i === 0}">{{ title.Value }}</h1>
                    <p v-else-if="title.Font_Size === 'Medium'" :class="{'first-item-margin': i === 0}">{{ title.Value }}</p>
                    <span v-else :class="{'first-item-margin': i === 0}">{{ title.Value }}</span>
                </template>
            </template>

            <div class="banner-btn wow fadeInUp" data-wow-delay="1s">
              <NuxtLink v-if="startLink" class="default-btn six" :to="`/whitepaper/${startLink}`">
                Read Whitepaper
              </NuxtLink>
              <GetUpdates></GetUpdates>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="banner-img" v-if="data">
            <img :src="data.Banner.url" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import GetUpdates from '../../components/Common/GetUpdates'

export default {
  name: 'MainBanner',
  components: {
    GetUpdates
  },
  props: ['data', 'startLink'],
}
</script>

<style scoped>
.first-item-margin {
    margin-bottom: 10px !important;
}
</style>
