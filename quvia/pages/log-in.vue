<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Log In"/>
    <LogIn/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import LogIn from '../components/log-in/LogIn'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    LogIn,
    Footer,
  }
}
</script>
