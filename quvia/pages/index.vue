<template>
  <div>
    <Navbar
      v-bind:logo="header ? header.Logo.url : ''"
      v-bind:whitepapers="whitepapers"
      v-bind:groups="groups"
      v-bind:startLink="startLink"
    />
    <MainBanner
      v-bind:data="header"
      v-bind:startLink="startLink"
    />
    <Footer
      v-bind:data="footer"
      v-bind:startLink="startLink"
    />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/Common/MainBanner'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    MainBanner,
    Footer,
  },
  data() {
    return {
      groups: [],
      whitepapers: {},
      header: null,
      footer: null,
      startLink: null
    }
  },
  created: async function () {
    const whitepapers = await this.$strapi.find('whitepapers');
    const homePage = await this.$strapi.find('home-page')
    this.whitepapers = {};
    this.groups = [];
    this.header = homePage.Header;
    this.footer = homePage.Footer;
    whitepapers.sort((wp1, wp2) => {
      if (wp1.group.order > wp2.group.order) {
        return 1;
      } else if (wp1.group.order < wp2.group.order) {
        return -1;
      } else {
        return wp1.order > wp2.order && 1 || -1
      }
    });

    whitepapers.forEach(w => {
      if (!this.whitepapers[w.group.name]) {
        this.groups.push(w.group.name);
        this.whitepapers[w.group.name] = [];
      }
      this.whitepapers[w.group.name].push(w);
    });

    if (this.groups.length > 0) {
      this.startLink = this.whitepapers[this.groups[0]][0].slug;
    }
  }
}
</script>
