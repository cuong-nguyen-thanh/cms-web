<template>
    <div>
        <footer class="footer-top-area pt-100 pb-70">
            <div class="container">
                <div 
                    class="row"
                    v-if="footer !== null"
                >
                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget contact">
                            <h3>
                                {{footer.title}}
                            </h3>

                            <ul>
                                <li class="pl-0">
                                    <a href="tel:Phone:+892-569-756">
                                        <i class="bx bx-phone-call"></i>
                                        <span>Hotline:</span> 
                                        {{footer.hotline}}
                                    </a>
                                </li>
                                
                                <li class="pl-0">
                                    <a href="mailto:hello@quvia.com">
                                        <i class="bx bx-envelope"></i>
                                        <span>Email:</span> 
                                        {{footer.email}}
                                    </a>
                                </li>
                                
                                <li>
                                    <i class="bx bx-location-plus"></i>
                                    <span>Address:</span> 
                                    {{footer.address}}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget">
                            <h3>{{footer.titleOne}}</h3>

                            <ul>
                                <li
                                    v-for="service in footer.services"
                                    :key="service.id"
                                >
                                    <a href="#">
                                        <i :class="service.icon"></i>
                                        {{service.text}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget">
                            <h3>{{footer.titleTwo}}</h3>

                            <ul>
                                <li
                                    v-for="support in footer.supports"
                                    :key="support.id"
                                >
                                    <a href="#">
                                        <i :class="support.icon"></i>
                                        {{support.text}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="single-widget">
                            <h3>{{footer.titleThree}}</h3>

                            <ul>
                                <li
                                    v-for="quick in footer.quicks"
                                    :key="quick.id"
                                >
                                    <a href="#">
                                        <i :class="quick.icon"></i>
                                        {{quick.text}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <footer class="footer-bottom-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="copy-right">
                            <p>
                                Copyright @2020 Quvia. Designed 
                                <a href="https://EnvyTheme.com/" target="blank">
                                    EnvyTheme
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="condition-privacy">
                            <ul>
                                <li>
                                    <NuxtLink to="/terms-conditions">
                                        Terms & Condition
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/privacy-policy">
                                        Privacy Policy
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        <back-to-top bottom="50px" right="50px">
            <div class="go-top">
                <i class='bx bx-chevrons-up'></i>
                <i class='bx bx-chevrons-up'></i>
            </div>
        </back-to-top>
    </div>
</template>

<script>

export default {
    name: 'Footer',

    data(){
        return{
            footer: null
        }
    },

    created: async function(){
        this.footer = await this.$strapi.find('footer')
    }
}
</script>