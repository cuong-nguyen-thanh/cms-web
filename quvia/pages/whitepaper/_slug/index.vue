<template>
  <div>
    <Navbar
      v-bind:disableSticky="true"
      v-bind:logo="header ? header.Logo.url : ''"
      v-bind:whitepapers="whitepapers"
      v-bind:groups="groups"
      v-bind:startLink="startLink"
    />
    <PageTitle
      v-if="detail !== null"
      :pageTitle="detail.title"
    />
    <div v-if="detail !== null">
      <BlogDetails
        v-bind:detailsContent="detail"
        v-bind:whitepapers="whitepapers"
        v-bind:groups="groups"
      />
    </div>
    <Footer
      v-bind:data="footer"
      v-bind:startLink="startLink"
    />
  </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import BlogDetails from '../../../components/blog-details/BlogDetails'
import Footer from '../../../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    BlogDetails,
    Footer
  },

  data() {
    return {
      detail: null,
      whitepapers: {},
      groups: [],
      startLink: null,
      header: null,
      footer: null,
    }
  },

  created: async function () {
    let {slug} = this.$route.params
    if (!slug) {
      slug = 'problem'
    }

    const whitepapers = await this.$strapi.find('whitepapers');
    const homePage = await this.$strapi.find('home-page');

    this.header = homePage.Header;
    this.footer = homePage.Footer;
    this.whitepapers = {}
    const flatWhitepapers = []

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
      flatWhitepapers.push(w);
      if (!this.whitepapers[w.group.name]) {
        this.groups.push(w.group.name);
        this.whitepapers[w.group.name] = [];
      }
      this.whitepapers[w.group.name].push(w);
    });

    if (this.groups.length > 0) {
      this.startLink = this.whitepapers[this.groups[0]][0].slug;
    }

    const index = flatWhitepapers.findIndex(item => {
      return item.slug === slug;
    });

    if (index != -1) {
      this.detail = flatWhitepapers[index];
      this.detail['prev'] = null;
      this.detail['next'] = null;
      if (index > 0) {
        this.detail['prev'] = flatWhitepapers[index - 1];
      }
      if (index < flatWhitepapers.length - 1) {
        this.detail['next'] = flatWhitepapers[index + 1];
      }
    }
  }
}
</script>
