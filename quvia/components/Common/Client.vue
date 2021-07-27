<template>
    <div class="client-area ptb-100">
        <div class="container">
            <div class="section-title white-title">
                <h2>What Client’s Say About Us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

            <div class="client-wrap owl-carousel owl-theme">
                <carousel
                    :autplay = "true"
                    :loop = "true"
                    :paginationEnabled = "false"
                    :autoplaySpeed = "true"
                    :autoplayTimeout = "500"
                    :perPageCustom = "[[0, 1], [576, 1], [768, 2], [992, 3], [1200, 3]]"
                    v-if="clients !== []"
                >
                    <slide
                        v-for="client in clients"
                        :key="client.id"
                    >
                        <div class="single-client">
                            <i class="quotes bx bxs-quote-alt-left"></i>
                            <p>
                                {{client.shortDesc}}
                            </p>

                            <ul>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                                <li>
                                    <i class="bx bxs-star"></i>
                                </li>
                            </ul>

                            <div class="client-img">
                                <img :src="client.img.url" alt="Image">
                                <h3>
                                    {{client.name}}
                                </h3>
                                <span>
                                    {{client.position}}
                                </span>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Client',

    data(){
        return{
            clients: []
        }
    },

    created: async function(){
        this.clients = await this.$strapi.find('clientwraps')
    }
}
</script>