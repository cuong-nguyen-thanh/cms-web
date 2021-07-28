<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Services Details"/>
    <ServicesDetails/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ServicesDetails from '../components/services-details/ServicesDetails'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    ServicesDetails,
    Footer,
  }
}
</script>
