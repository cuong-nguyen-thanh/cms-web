<template>
    <div class="terms-conditions-area ptb-100">
        <div class="container">
            <div 
                class="single-privacy"
                v-if="privacy !== null"
            >
                <h3 class="mt-0">
                    {{privacy.heading}}
                </h3>

                <span v-html="privacy.longText"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PrivacyPolicy',

    data(){
        return{
            privacy: null
        }
    },

    created: async function(){
        this.privacy = await this.$strapi.find('privacypolicy')
    }
}
</script>