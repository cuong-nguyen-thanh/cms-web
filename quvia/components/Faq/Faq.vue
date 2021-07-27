<template>
    <div class="faq-area ptb-100">
        <div 
            class="container"
            v-if="content !== null"
        >
            <div class="section-title">
                <h2>
                    {{content.heading}}
                </h2>
                <p>
                    {{content.shortDesc}}
                </p>
            </div>

            <div class="faq-accordion">
                <ul 
                    class="accordion" 
                    role="tablist"
                >
                    <b-card 
                        no-body 
                        class="accordion-item"
                        v-for="accordion in content.faq"
                        :key="accordion.title"
                    >
                        <b-card-header 
                            header-tag="header" 
                            class="p-1" 
                            role="tab"
                        >
                            <b-button 
                                class="default-btn" 
                                block 
                                v-b-toggle="`accordion-${accordion.id}`" 
                                variant="info"
                            > 
                                {{accordion.title}}
                                <span></span>
                            </b-button>
                        </b-card-header>
                        <b-collapse 
                            :id="`accordion-${accordion.id}`" 
                            visible 
                            accordion="my-accordion" 
                            role="tabpanel"
                        >
                            <b-card-body>
                                <b-card-text>
                                    <p>{{accordion.shortDesc}}.</p>
                                </b-card-text>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Faq',
    data(){
        return{
            content: null
        }
    },
    created: async function(){
        this.content = await this.$strapi.find('faqpage')
    }
}
</script>