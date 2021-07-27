<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Sign In" />
        <SignUp />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import SignUp from '../components/sign-in/SignUp'
import Footer from '../layouts/Footer'
 
export default {
    components: {
        Navbar,
        PageTitle,
        SignUp,
        Footer,
    }
}
</script>