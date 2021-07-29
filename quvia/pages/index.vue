<template>
  <div>
    <NavbarStyleThree/>
    <MainBanner/>
    <ServicesSlider/>
<!--    <Team/>-->
<!--    <Advisor/>-->
    <Footer/>
<!--    <CopyRight/>-->
  </div>
</template>

<script>
import NavbarStyleThree from '../layouts/NavbarStyleThree'
import MainBanner from '../components/home-six/MainBanner'
import Partner from '../components/home-six/Partner'
import ServicesSlider from '../components/home-six/ServicesSlider'
import FooterStyleTwo from '../layouts/FooterStyleTwo'
import Footer from '../layouts/Footer'
import CopyRight from '../layouts/CopyRight'
import Team from "../components/Common/Team";
import Advisor from "../components/Common/Advisor";

export default {
  components: {
    NavbarStyleThree,
    MainBanner,
    Partner,
    ServicesSlider,
    Team,
    Advisor,
    FooterStyleTwo,
    Footer,
    CopyRight,
  }
}
</script>
