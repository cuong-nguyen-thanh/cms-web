<template>
    <div class="banner-area-six">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <h1>The next-generation creator platform, powered by blockchain technology</h1>
                        <p>A scalable ecosystem, built from the ground up, to equitably distribute value by giving everyone a stake in the economy.</p>

                        <div class="banner-btn wow fadeInUp" data-wow-delay="1s">
                            <NuxtLink class="default-btn six" to="/whitepaper/problem">
                                <i class="bx bx-file"></i>
                                Read Whitepaper
                            </NuxtLink>
<!--                            <NuxtLink class="default-btn active" to="/about-us">-->
<!--                                <i class="bx bx-user"></i>-->
<!--                                Our Team-->
<!--                            </NuxtLink>-->
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="banner-img">
                        <img src="~/assets/images/landing.jpg" alt="Image">
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-shape-1">
            <img src="~/assets/images/shape/shape-9.png" alt="Image">
        </div>
        <div class="banner-shape-2">
            <img src="~/assets/images/shape/shape-10.png" alt="Image">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Banner'
}
</script>
