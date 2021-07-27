<template>
    <div>
        <Navbar />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].title" 
        />

        <div v-if="details !== null">
            <ServicesDetails
                v-bind:servicesDetails="details"
            />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../layouts/Navbar'
import PageTitle from '../../components/Common/PageTitle'
import ServicesDetails from '../../components/services-details/ServicesDetails'
import Footer from '../../layouts/Footer'
 
export default {
    components: {
        Navbar,
        PageTitle,
        ServicesDetails,
        Footer,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('servicesdetails', `slug=${slug}`)
    }
}
</script>