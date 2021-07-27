<template>
    <div class="pricing-area">
        <div class="container">
            <div class="section-title">
                <h2>Buy Our Plans & Packages</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

            <div 
                class="row"
                v-if="pricings !== []"
            >
                <div 
                    class="col-lg-4 col-md-6 justify-content-center"
                    v-for="pricing in pricings"
                    :key="pricing.id"
                >
                    <div :class="pricing.className">
                        <div class="pricing-content">
                            <h3>{{pricing.title}}</h3>
                            <h1>{{pricing.price}} <sub>/ per month</sub></h1>
                        </div>

                        <ul>
                            <li
                                v-for="feature in pricing.features"
                                :key="feature.id"
                            >
                                <i :class="feature.icon"></i>
                                {{feature.text}}
                            </li>
                        </ul>

                        <a href="#" class="default-btn">
                            {{pricing.btnText}}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Pricing',

    data(){
        return{
            pricings: []
        }
    },

    created: async function(){
        this.pricings = await this.$strapi.find('pricings')
    }
}
</script>