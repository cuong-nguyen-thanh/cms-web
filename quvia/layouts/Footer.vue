<template>
  <div>
    <footer class="footer-top-area">
      <client-only>
        <div class="container">
          <div class="row">
            <div class="col-12 footer-logo">
              <img v-if="data" :src="data.Logo.url" alt="footer">
            </div>
            <div class="col-12 footer-line">
              <p v-if="data">{{data.Slogan}}</p>
            </div>

            <div class="col-12 footer-line">
              <ul>
                <li>
                  <NuxtLink v-if="startLink" :to="`/whitepaper/${startLink}`">
                    <i class='bx bx-file'></i>
                    &nbsp;Whitepaper
                  </NuxtLink>
                </li>
                <li>
                  <a v-if="data" :href="data.Telegram" target="_blank">
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
              <p v-if="data">
                {{data.CopyRight}}
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
  props: ['data', 'startLink'],
}
</script>

<style scoped>
.footer-top-area ul {
  list-style: none;
  padding: 0;
}
</style>
