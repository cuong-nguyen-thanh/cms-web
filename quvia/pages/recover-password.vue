<template>
  <div>
    <Navbar/>
    <PageTitle pageTitle="Recover Password"/>
    <RecoverPassword/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import RecoverPassword from '../components/recover-password/RecoverPassword'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    PageTitle,
    RecoverPassword,
    Footer,
  }
}
</script>
