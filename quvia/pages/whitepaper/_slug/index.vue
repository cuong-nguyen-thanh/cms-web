<template>
  <div>
    <NavbarStyleWhitepaper/>
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
    <Footer/>
  </div>
</template>

<script>
import NavbarStyleWhitepaper from '../../../layouts/NavbarStyleWhitepaper'
import PageTitle from '../../../components/Common/PageTitle'
import BlogDetails from '../../../components/blog-details/BlogDetails'
import Footer from '../../../layouts/Footer'

export default {
  components: {
    NavbarStyleWhitepaper,
    PageTitle,
    BlogDetails,
    Footer
  },

  data() {
    return {
      detail: null,
      whitepapers: {},
      groups: []
    }
  },

  created: async function () {
    let {slug} = this.$route.params
    if (!slug) {
      slug = 'problem'
    }

    const groups = await this.$strapi.find('whitepaper-groups', {_sort: 'order'})
    this.whitepapers = {}
    const flatWhitepapers = []
    groups.forEach(g => {
      this.groups.push(g.name);
      g.whitepapers.sort((wp1, wp2) => wp1.order > wp2.order && 1 || -1);
      for (let i = 0; i < g.whitepapers.length; i++) {
        g.whitepapers[i]['group'] = g.name;
        flatWhitepapers.push(g.whitepapers[i]);
      }
      this.whitepapers[g.name] = g.whitepapers;
    })

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
