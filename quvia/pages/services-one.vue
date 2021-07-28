<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Services Style One"/>
    <Security/>
    <Solutions/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Security from '../components/services-one/Security'
import Solutions from '../components/services-one/Solutions'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    Security,
    Solutions,
    Footer,
  }
}
</script>
