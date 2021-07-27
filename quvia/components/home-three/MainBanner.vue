<template>
    <div class="banner-area banner-area-three">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="banner-text">
                        <span>Introducing RepubliK</span>
                        <h1>The next-generation creator platform, powered by blockchain technology</h1>
                        <p>A scalable ecosystem, built from the ground up, to equitably distribute value by giving everyone a stake in the economy.</p>

                        <div class="banner-btn">
                            <NuxtLink class="default-btn" to="/pricing">
                                Booking Now
                            </NuxtLink>
                            <NuxtLink class="default-btn active" to="/about-us">
                                Read Whitepaper
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="follow-us">
            <ul>
                <li>
                    <span>Follow Us On Facebook</span>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </li>
            </ul>
        </div>

        <div class="banner-shape-1">
            <img src="~/assets/images/shape/shape-1.png" alt="Image">
        </div>
        <div class="banner-shape-2">
            <img src="~/assets/images/shape/shape-2.png" alt="Image">
        </div>
        <div class="banner-shape-3">
            <img src="~/assets/images/shape/shape-3.png" alt="Image">
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainBanner'
}
</script>
