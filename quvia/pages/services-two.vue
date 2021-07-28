<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Services Style Two"/>
    <Features/>
    <Performance/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Features from '../components/services-two/Features'
import Performance from '../components/services-two/Performance'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    Features,
    Performance,
    Footer,
  }
}
</script>
