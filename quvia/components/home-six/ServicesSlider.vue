<template>
    <div class="services-area bg-color-f9f9f9 ptb-100">
        <div class="container">
            <div class="section-title-six">
                <span>Welcome to RepubliK</span>
                <h2>The world’s first digital ecosystem</h2>
                <p>RepubliK is a revolutionary ecosystem of digital tools, where talent and their audience can engage with each other in a mutually beneficial way.</p>
            </div>

            <div class="services-slider-content">
                <div class="services-slider owl-theme owl-carousel">
                    <carousel
                        :autplay = "true"
                        :loop = "true"
                        :paginationEnabled = "false"
                        :navigationEnabled="true"
                        navigationNextLabel="<i class='bx bx-right-arrow-alt'></i>"
                        navigationPrevLabel="<i class='bx bx-left-arrow-alt'></i>"
                        :autoplaySpeed = "true"
                        :autoplayTimeout = "500"
                        :perPageCustom = "[[0, 1]]"
                    >
                        <slide>
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="services-single-item">
                                        <h3>Problem</h3>
                                        <p>The creator economy is broken.</p>
                                        <p>The current ecosystem masquerades as a republic but is actually an oligopoly. We are led to believe that the system is fair and the share of the spoils equitable, but it is an illusion created by record labels, media companies, and social media platforms. In reality they dominate the economy for creative and artistic talent.</p>

                                        <p>RepubliK will be the creative commons built from the ground up to equitably distribute value by giving everyone a stake in the economy. </p>

                                        <NuxtLink  class="default-btn six" to="/whitepaper/problem">
                                            <i class="bx bx-file"></i>
                                            Read More
                                        </NuxtLink>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="services-img">
                                        <img src="~/assets/images/services-slider/services-5.png" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </slide>

                        <slide>
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="services-single-item">
                                        <h3>Opportunity</h3>
                                        <p>It’s estimated that there are 50 million people around the world who now consider themselves "creators".</p>
                                        <p>Even more significantly though, 93% are amateurs struggling to make a living out of their passion.</p>
                                        <p>While the current funding ecosystem for creative and artistic talent has evolved in the last few years beyond traditional content monetisation models, current solutions still favour the top minority of creators who have access to an existing audience. Making it no easier for up-and-coming artists with talent to be discovered, let alone get funded.</p>

                                        <NuxtLink  class="default-btn six" to="/whitepaper/opportunity">
                                            <i class="bx bx-file"></i>
                                            Read More
                                        </NuxtLink>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="services-img">
                                        <img src="~/assets/images/services-slider/services-3.png" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ServicesSlider'
}
</script>
