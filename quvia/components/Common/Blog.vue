<template>
    <div class="blog-area pt-100 pb-70">
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
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '../Common/BlogCard'

export default {
    name: 'Blog',

    components: {
        BlogCard
    },

    data(){
        return{
            posts: []
        }
    },

    created: async function(){
        this.posts = await this.$strapi.find('blogcards', '_limit=3')
    }
}
</script>