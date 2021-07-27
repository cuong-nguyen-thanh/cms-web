<template>
    <div class="cybersecurity-area pt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div 
                        class="cybersecurity-content"
                        v-if="cybersecurity !== null"
                    >
                        <h2>
                            {{cybersecurity.heading}}
                        </h2>
                        <p>
                            {{cybersecurity.shortDesc}}
                        </p>

                        <div class="row">
                            <div class="col-lg-6 col-sm-6">
                                <ul class="cybersecurity-item">
                                    <li
                                        v-for="item in cybersecurity.items"
                                        :key="item.id"
                                    >
                                        <i :class="item.icon"></i>
                                        {{item.text}}
                                    </li>
                                </ul>
                            </div>

                            <div class="col-lg-6 col-sm-6">
                                <ul>
                                    <li
                                        v-for="item in cybersecurity.itemsTwo"
                                        :key="item.id"
                                    >
                                        <i :class="item.icon"></i>
                                        {{item.text}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pr-0">
                    <div class="cybersecurity-img"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Cybersecurity',

    data(){
        return{
            cybersecurity: null
        }
    },

    created: async function(){
        this.cybersecurity = await this.$strapi.find('cybersecurity')
    }
}
</script>