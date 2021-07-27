<template>
    <div class="security-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Complete Website Security</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.</p>
            </div>

            <div 
                class="row"
                v-if="securitys !== []"
            >
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="security in securitys"
                    :key="security.id"
                >
                    <div class="single-security">
                        <i :class="security.icon"></i>
                        <h3>
                            {{security.title}}
                        </h3>
                        <p>
                            {{security.shortDesc}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Security',

    data(){
        return{
            securitys: []
        }
    },

    created: async function(){
        this.securitys = await this.$strapi.find('securitycards')
    }
}
</script>