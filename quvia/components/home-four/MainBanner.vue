<template>
    <div class="banner-area banner-area-two">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="banner-text">
                                <span>Introducing RepubliK</span>
                                <h1>The next-generation creator platform, powered by blockchain technology</h1>
                                <p>A scalable ecosystem, built from the ground up, to equitably distribute value by giving everyone a stake in the economy.</p>

                                <div class="banner-btn">
                                    <NuxtLink class="default-btn" to="/pricing">
                                        Read Whitepaper
                                    </NuxtLink>
                                    <NuxtLink class="default-btn active" to="/about-us">
                                        About Us
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="banner-site-img four">
                                <img src="~/assets/images/banner-site-img2.png" alt="Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainBanner'
}
</script>
