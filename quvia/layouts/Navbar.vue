<template>
  <header class="header-area-six fixed-top">
<!--    <HederStyleTwo/>-->

    <div class="nav-area-six">
      <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="main-nav">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <client-only>
                <NuxtLink class="navbar-brand" to="/">
                  <img :src="logo" alt="">
                </NuxtLink>

                <b-navbar-toggle target="navbarSupportedContent">
                  <span class="icon-bar top-bar"></span>
                  <span class="icon-bar middle-bar"></span>
                  <span class="icon-bar bottom-bar"></span>
                </b-navbar-toggle>

                <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                  <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                      <NuxtLink :to="`/whitepaper/${startLink}`" class="nav-link">
                        Whitepaper
                      </NuxtLink>
                      <ul class="dropdown-menu">
                        <li class="nav-item" v-for="(group, gi) in groups">
                          <NuxtLink :to="whitepapers[group].length > 0 ? `/whitepaper/${whitepapers[group][0].slug}` : '#'" class="nav-link">
                            {{ group }}
                            <i class='bx bx-chevron-right'></i>
                          </NuxtLink>
                          <ul class="dropdown-menu">
                            <li class="nav-item" v-for="(whitepaper, wi) in whitepapers[group]">
                              <NuxtLink :to="`/whitepaper/${whitepaper.slug}`" class="nav-link">
                                {{ whitepaper.title }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </b-collapse>
                <GetUpdates :is-small="true"></GetUpdates>
              </client-only>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HederStyleTwo from '../layouts/HederStyleTwo'
import GetUpdates from '../components/Common/GetUpdates'

export default {
  name: 'NavbarStyleThree',
  components: {
    HederStyleTwo,
    GetUpdates
  },

  props: ['logo', 'startLink', 'whitepapers', 'groups', 'disableSticky'],

  data() {
    return {
      isSticky: false
    }
  },

  mounted() {
    if (!this.disableSticky) {
      const that = this;
      window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY
        if (scrollPos >= 100) {
          that.isSticky = true
        } else {
          that.isSticky = false
        }
      })
    } else {
      this.isSticky = true;
    }
  }
}
</script>
