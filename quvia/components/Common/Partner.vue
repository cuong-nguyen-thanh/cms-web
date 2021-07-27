<template>
    <div class="partner-area ptb-100">
        <div class="container">
            <div class="partner-wrap owl-carousel owl-theme">
                <carousel
                    :autplay = "true"
                    :loop = "true"
                    :paginationEnabled = "false"
                    :autoplaySpeed = "true"
                    :autoplayTimeout = "500"
                    :perPageCustom = "[[0, 2], [576, 3], [768, 4], [1024, 4], [1200, 5]]"
                    v-if="partners !== []"
                >
                    <slide
                        v-for="partner in partners"
                        :key="partner.id"
                    >
                        <div class="partner-item">
                            <img :src="partner.img.url" alt="Image">
                            <a class="partner-overly" href="#" target="_blank">
                                <img :src="partner.imgTwo.url" alt="Image">
                            </a>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Partner',

    data(){
        return{
            partners: []
        }
    },
     
    created: async function(){
        this.partners = await this.$strapi.find('partners')
    }
}
</script>