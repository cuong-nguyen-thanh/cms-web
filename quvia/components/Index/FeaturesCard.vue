<template>
    <div>
        <div class="container pt-100">
            <div 
                class="row justify-content-center"
                v-if="features !== []"
            >
                <div 
                    class="col-lg-4 col-sm-6"
                    v-for="feature in features"
                    :key="feature.id"
                >
                    <div class="single-features">
                        <h3>
                            <i :class="feature.icon"></i> 
                            {{feature.title}}
                        </h3>
                        <p>
                            {{feature.shortDesc}}
                        </p>
                        <span :class="feature.icon"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeaturesCard',

    data(){
        return{
            features: []
        }
    },

    created: async function(){
        this.features = await this.$strapi.find('featurecards')
    }
}
</script>