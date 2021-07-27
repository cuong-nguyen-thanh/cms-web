<template>
    <div class="client-area-page ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>What Client’s Say About Us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

            <div class="row">
                <div 
                    class="col-lg-4 col-sm-6"
                    v-for="client in clients"
                    :key="client.id"
                >
                    <div class="single-client">
                        <i class="quotes bx bxs-quote-alt-left"></i>
                        <p>
                            {{client.shortDesc}}
                        </p>

                        <ul>
                            <li>
                                <i class="bx bxs-star"></i>
                            </li>
                            <li>
                                <i class="bx bxs-star"></i>
                            </li>
                            <li>
                                <i class="bx bxs-star"></i>
                            </li>
                            <li>
                                <i class="bx bxs-star"></i>
                            </li>
                            <li>
                                <i class="bx bxs-star"></i>
                            </li>
                        </ul>

                        <div class="client-img">
                            <img :src="client.img.url" alt="Image">
                            <h3>
                                {{client.name}}
                            </h3>
                            <span>
                                {{client.position}}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="page-navigation-area">
                        <nav aria-label="Page navigation example text-center">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link page-links" href="#">
                                        <i class='bx bx-chevrons-left'></i>
                                    </a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        <i class='bx bx-chevrons-right'></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Client',

    data(){
        return{
            clients: []
        }
    },

    created: async function(){
        this.clients = await this.$strapi.find('clientwraps')
    }
}
</script>