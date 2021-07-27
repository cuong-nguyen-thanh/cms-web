<template>
    <div class="security-area pt-100 pb-70">
        <div class="container">
            <div class="section-title">
                <h2>Complete Website Security</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.</p>
            </div>

            <div 
                class="row"
                v-if="completed !== []"
            >
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="complete in completed"
                    :key="complete.id"
                >
                    <div class="single-security">
                        <i :class="complete.icon"></i>
                        <h3>
                            {{complete.title}}
                        </h3>
                        <p>
                            {{complete.shortDesc}}
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
            completed: []
        }
    },

    created: async function(){
        this.completed = await this.$strapi.find('completecards')
    }
}
</script>