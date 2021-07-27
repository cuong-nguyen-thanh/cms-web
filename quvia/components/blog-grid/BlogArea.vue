<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Latest News From Blog</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

            <div class="row">
                <BlogCard 
                   v-if="posts !== []" 
                   :singleBlog="posts"
                />

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
import BlogCard from '../Common/BlogCard'

export default {
    name: 'BlogArea',

    components: {
        BlogCard
    },

    data(){
        return{
            posts: []
        }
    },

    created: async function(){
        this.posts = await this.$strapi.find('blogcards')
    }
}
</script>