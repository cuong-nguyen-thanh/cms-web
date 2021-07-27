<template>
    <div>
        <NavbarStyleTwo />
        <MainBanner />
        <Partner />
        <Security />
        <Approach />
        <Solutions />
        <Electronic />
        <Complete />
        <Client />
        <Cybersecurity />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/Index/MainBanner'
import Partner from '../components/Common/Partner'
import Security from '../components/Index/Security'
import Approach from '../components/Index/Approach'
import Solutions from '../components/Index/Solutions'
import Electronic from '../components/Index/Electronic'
import Complete from '../components/Index/Complete'
import Client from '../components/Common/Client'
import Cybersecurity from '../components/Index/Cybersecurity'
import Blog from '../components/Common/Blog'
import Footer from '../layouts/Footer'
import NavbarStyleTwo from "../layouts/NavbarStyleTwo";

export default {
    components: {
      NavbarStyleTwo,
        MainBanner,
        Partner,
        Security,
        Approach,
        Solutions,
        Electronic,
        Complete,
        Client,
        Cybersecurity,
        Blog,
        Footer,
    }
}
</script>
