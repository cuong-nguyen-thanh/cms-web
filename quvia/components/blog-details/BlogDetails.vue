<template>
  <div class="blog-details-area pt-70 pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details-desc">
            <div class="article-content">
              <span v-html="details.content"></span>
            </div>

            <div class="post-navigation">
              <div class="navigation-links">
                <div class="nav-previous">
                  <a v-if="details.prev" :href="`/whitepaper/${details.prev.slug}`">
                    <i class='bx bx-left-arrow-alt'></i> PREVIOUS
                  </a>
                  <p v-if="details.prev"><em>{{ details.prev.title }}</em></p>
                </div>

                <div class="nav-next">
                  <a v-if="details.next" :href="`/whitepaper/${details.next.slug}`">
                    NEXT <i class='bx bx-right-arrow-alt'></i>
                  </a>
                  <p v-if="details.next"><em>{{ details.next.title }}</em></p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="col-lg-4 col-md-12">
          <BlogSidebar :whitepapers="whitepapers" :groups="groups" :item="details"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
  name: 'BlogDetails',
  components: {
    BlogSidebar
  },
  props: ['detailsContent', 'whitepapers', 'groups'],
  data: function () {
    return {
      details: this.detailsContent,
    }
  }
}
</script>
