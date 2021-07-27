<template>
    <div class="terms-conditions-area ptb-100">
        <div class="container">
            <div 
                class="single-privacy"
                v-if="conditions !== null"
            >
                <h3 class="mt-0">
                    {{conditions.heading}}
                </h3>

                <span v-html="conditions.longText"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TermsConditions',

    data(){
        return{
            conditions: null
        }
    },

    created: async function(){
        this.conditions = await this.$strapi.find('termsofconditions')
    }
}
</script>