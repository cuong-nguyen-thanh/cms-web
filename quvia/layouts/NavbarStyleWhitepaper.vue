<template>
  <header class="header-area-six fixed-top">
    <HederStyleTwo/>

    <div class="nav-area-six">
      <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="main-nav">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <client-only>
                <NuxtLink class="navbar-brand" to="/">
                  <img src="~/assets/images/republik-logo.png" alt="image">
                </NuxtLink>

                <b-navbar-toggle target="navbarSupportedContent">
                  <span class="icon-bar top-bar"></span>
                  <span class="icon-bar middle-bar"></span>
                  <span class="icon-bar bottom-bar"></span>
                </b-navbar-toggle>

                <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                  <ul class="navbar-nav m-auto">
<!--                    <li class="nav-item">-->
<!--                      <NuxtLink to="/#" class="nav-link">-->
<!--                        Home-->
<!--                        <i class='bx bx-chevron-right'></i>-->
<!--                      </NuxtLink>-->

<!--                    </li>-->

                    <li class="nav-item">
                      <NuxtLink to="/whitepaper/problem" class="nav-link">
                        Whitepaper
                      </NuxtLink>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <NuxtLink to="/whitepaper/problem" class="nav-link">
                            The Creator Economy
                            <i class='bx bx-chevron-right'></i>
                          </NuxtLink>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/problem" class="nav-link">
                                Problem
                              </NuxtLink>
                            </li>

                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/opportunity" class="nav-link">
                                Opportunity
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>

                        <li class="nav-item">
                          <NuxtLink to="/whitepaper/introduction" class="nav-link">
                            RepubliK
                            <i class='bx bx-chevron-right'></i>
                          </NuxtLink>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/introduction" class="nav-link">
                                Introduction
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/the-rad-token" class="nav-link">
                                The RAD Token
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/exposure-and-talent-discovery" class="nav-link">
                                Exposure and Talent Discovery
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/virtual-performance-platform" class="nav-link">
                                Virtual Event Platform
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/creator-journey" class="nav-link">
                                Creator Journey
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/keeping-creators-on-platform" class="nav-link">
                                Keeping Creators on Platform
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/market-entry" class="nav-link">
                                Market Entry
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/distribution" class="nav-link">
                                Distribution
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/release-schedule" class="nav-link">
                                Release Schedule
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>

                        <li class="nav-item">
                          <NuxtLink to="/team" class="nav-link">
                            Team
                            <i class='bx bx-chevron-right'></i>
                          </NuxtLink>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/core-team" class="nav-link">
                                Core Team
                              </NuxtLink>
                            </li>
                            <li class="nav-item">
                              <NuxtLink to="/whitepaper/advisors" class="nav-link">
                                Advisors
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </b-collapse>
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
import SidebarModal from '../layouts/SidebarModal'

export default {
  name: 'NavbarStyleThree',
  components: {
    SidebarModal,
    HederStyleTwo
  },

  data() {
    return {
      isSticky: true,
      logo: null
    }
  },

  mounted() {
    const that = this
    // window.addEventListener('scroll', () => {
    //   let scrollPos = window.scrollY
    //   if (scrollPos >= 100) {
    //     that.isSticky = true
    //   } else {
    //     that.isSticky = false
    //   }
    // })
  },

  created: async function () {
    // this.logo = await this.$strapi.find('sitelogo')
  }
}
</script>
