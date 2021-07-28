<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="About"/>
    <Cybersecurity/>
    <Complete/>
    <Electronic/>
    <Approach/>
    <Client/>
    <Partner/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Cybersecurity from '../components/about-us/Cybersecurity'
import Complete from '../components/about-us/Complete'
import Electronic from '../components/about-us/Electronic'
import Approach from '../components/about-us/Approach'
import Client from '../components/Common/Client'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    Cybersecurity,
    Complete,
    Electronic,
    Approach,
    Client,
    Partner,
    Footer,
  }
}
</script>
