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
        v-bind:blogs="blogs"
        v-bind:groups="groups"
      />
    </div>
<!--    <FooterStyleTwo/>-->
    <Footer/>
  </div>
</template>

<script>
import NavbarStyleWhitepaper from '../../../layouts/NavbarStyleWhitepaper'
import PageTitle from '../../../components/Common/PageTitle'
import BlogDetails from '../../../components/blog-details/BlogDetails'
import FooterStyleTwo from '../../../layouts/FooterStyleTwo'
import Footer from '../../../layouts/Footer'
import CopyRight from '../../../layouts/CopyRight'

export default {
  components: {
    NavbarStyleWhitepaper,
    PageTitle,
    BlogDetails,
    Footer,
    FooterStyleTwo,
    CopyRight,
  },

  data() {
    return {
      detail: null,
      blogs: {},
      groups: []
    }
  },

  created: async function () {
    let {slug} = this.$route.params
    if (!slug) {
      slug = 'problem'
    }
    console.log(slug)
    const blogDetails = await this.$strapi.find('blogdetails', {_sort: 'groupOrder'})
    this.blogs = blogDetails.reduce((r, a) => {
      if (!r[a.group]) {
        r[a.group] = []
        this.groups.push(a.group);
      }
      r[a.group].push(a);
      return r;
    }, Object.create(null));


    const index = blogDetails.findIndex(item => {
      return item.slug === slug;
    });
    if (index != -1) {
      this.detail = blogDetails[index];
      this.detail['prev'] = null;
      this.detail['next'] = null;
      if (index > 0) {
        this.detail['prev'] = blogDetails[index - 1];
      }
      if (index < blogDetails.length - 1) {
        this.detail['next'] = blogDetails[index + 1];
      }
    }
  }
}
</script>
