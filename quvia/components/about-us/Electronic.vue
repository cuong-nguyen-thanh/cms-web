<template>
    <div class="electronic-area bg-color ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="electronic !== null"
            >
                <div class="col-lg-6">
                    <div class="electronic-content">
                        <h2>
                            {{electronic.heading}}
                        </h2>
                        <div class="electronic-tab-wrap">
                            <div class="electronic-tab">
                                <b-card no-body>
                                    <b-tabs card>
                                        <b-tab 
                                            v-for="tab in electronic.tabs"
                                            :key="tab.id"
                                            :title="tab.title"
                                        >
                                            <b-card-text>
                                                <span v-html="tab.longDesc"></span>
                                            </b-card-text>
                                            <NuxtLink class="default-btn" to="/about-us">
                                                {{tab.btnDesc}}
                                            </NuxtLink>
                                        </b-tab>
                                    </b-tabs>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="electronic-img">
                        <img :src="electronic.img.url" alt="Image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Electronic',
    data() {
        return {
            electronic: null
        }
    },

    created: async function(){
        this.electronic = await this.$strapi.find('electronic')
    }
}
</script>