<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Blog Grid"/>
    <BlogArea/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogArea from '../components/blog-grid/BlogArea'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    BlogArea,
    Footer,
  }
}
</script>
