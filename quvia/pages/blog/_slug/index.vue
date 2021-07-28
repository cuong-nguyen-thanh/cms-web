<template>
  <div>
    <Navbar/>
    <PageTitle
      v-if="details !== null"
      :pageTitle="details.title"
    />
    <div v-if="details !== null">
      <BlogDetails
        v-bind:detailsContent="details"
      />
    </div>
    <Footer/>
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
    Footer,
  },

  data() {
    return {
      details: null
    }
  },

  created: async function () {
    let {slug} = this.$route.params
    if (!slug) {
      slug = 'problem'
    }
    console.log(slug)
    this.details = await this.$strapi.find('blogdetails', {slug})
  }
}
</script>
