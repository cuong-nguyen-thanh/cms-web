<template>
    <div class="approach-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="content !== null"
            >
                <div class="col-lg-6">
                    <div class="approach-img">
                        <img :src="content.img.url" alt="Image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="approach-content">
                        <h2>
                            {{content.heading}}
                        </h2>
                        <p>
                            {{content.shortDesc}}
                        </p>

                        <ul>
                            <li
                                v-for="list in content.lists"
                                :key="list.id"
                            >
                                <i :class="list.icon"></i>
                                <h3>
                                    {{list.title}}
                                </h3>
                                <p>
                                    {{list.shortDesc}}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Approach',

    data(){
        return{
            content: null
        }
    },

    created: async function(){
        this.content = await this.$strapi.find('approach')
    }
}
</script>