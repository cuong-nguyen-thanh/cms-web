<template>
    <section class="complete-area pb-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 pl-0">
                    <div class="complete-img">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="complete-content">
                        <h2>The most Complete and Effective Protection for Your Home and Office</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit incididunt ut labore et dolore magna aliqua.</p>

                        <div 
                            class="row"
                            v-if="completed !== []"
                        >
                            <div 
                                class="col-lg-6 col-sm-6"
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
            </div>
        </div>
        <div class="complete-shape">
            <img src="~/assets/images/complete-shape.png" alt="Image">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Complete',

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