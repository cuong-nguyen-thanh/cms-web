<template>
  <div>
    <NavbarStyleThree/>
    <MainBanner/>
    <Footer/>
  </div>
</template>

<script>
import NavbarStyleThree from '../layouts/Navbar'
import MainBanner from '../components/index/MainBanner'
import Footer from '../layouts/Footer'

export default {
  components: {
    NavbarStyleThree,
    MainBanner,
    Footer,
  }
}
</script>
