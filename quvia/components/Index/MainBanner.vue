<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="banner-area banner-item-bg-1">
            <div class="container">
                <div 
                    class="row align-items-center"
                    v-if="banner !== null"
                >
                    <div class="col-lg-9">
                        <div class="banner-text">
                            <span>
                                {{banner.subTitle}}
                            </span>
                            <h1>
                                {{banner.heading}}
                            </h1>
                            <p>
                                {{banner.shortDesc}}
                            </p>

                            <div class="banner-btn">
                                <NuxtLink to="/pricing" class="default-btn">
                                    {{banner.btnText}}
                                </NuxtLink>

                                <NuxtLink to="/about-us" class="default-btn active">
                                    {{banner.btnTextTwo}}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3">
                        <div class="video-btn-animat">
                            <div
                                class="video-btn popup-youtube"
                                v-for="(image, imageIndex) in items"
                                :key="imageIndex"
                                @click="index = imageIndex"
                                style="cursor: pointer"
                            >
                                <i class="bx bx-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FeaturesCard />
            
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import FeaturesCard from '../Index/FeaturesCard'

export default {
    name: 'MainBanner',
    components: { 
        FeaturesCard 
    },
    data: function () {
        return {
            index: null,
            items: [],
            banner: null
        };
    },

    created: async function(){
        let obj = {}
        this.banner = await this.$strapi.find('bannerdefaulthomepage')
        this.items.push({"src": this.banner.videoLink})
    }
}
</script>