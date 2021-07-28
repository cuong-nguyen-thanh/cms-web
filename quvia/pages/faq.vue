<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="FAQ"/>
    <Faq/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Faq from '../components/Faq/Faq'
import Contact from '../components/Faq/Contact'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    Faq,
    Contact,
    Footer,
  }
}
</script>
