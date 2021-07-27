<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicy />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import PrivacyPolicy from '../components/privacy-policy/PrivacyPolicy'
import Footer from '../layouts/Footer'
 
export default {
    components: {
        Navbar,
        PageTitle,
        PrivacyPolicy,
        Footer,
    }
}
</script>