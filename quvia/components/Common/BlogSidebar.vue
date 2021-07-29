<template>
  <div class="widget-area" id="secondary">
    <div class="widget widget_search">
      <h3 class="widget-title">Search Now</h3>
      <div class="post-wrap">
        <form class="search-form">
          <label>
            <span class="screen-reader-text">Search for:</span>
            <input type="search" class="search-field" placeholder="Search...">
          </label>
          <button type="submit"><i class='bx bx-search'></i></button>
        </form>
      </div>
    </div>

    <div class="widget widget_categories" v-for="(item, index) in groups">
      <h3 class="widget-title">{{ item }}</h3>
      <div class="post-wrap">
        <ul>
          <li v-for="(blog, i) in blogs[item]">
            <a :href="`/whitepaper/${blog.slug}`" :class="{'sidebar-item-active': blog.slug === slug}">
              {{ blog.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogSidebar',
  props: ['blogs', 'groups', 'slug'],
  data: function () {
    return {
      blogList: this.blogs
    }
  }
}
</script>

<style scoped>
.sidebar-item-active {
  color: #d80650 !important;
  font-weight: 600 !important;
}
</style>
