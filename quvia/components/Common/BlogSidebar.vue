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

    <div class="widget widget_categories" v-for="(group, index) in groups">
      <a :href="`/whitepaper/${blogs[group][0].slug}`">
        <h3 class="widget-title">
          {{ group }}
        </h3>
      </a>
      <div class="post-wrap" v-if="group === item.group">
        <ul>
          <li v-for="(blog, i) in blogs[group]" :class="{'sidebar-item-active': blog.slug === item.slug}">
            <a :href="`/whitepaper/${blog.slug}`">
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
  props: ['blogs', 'groups', 'item'],
  data: function () {
    return {
      blogList: this.blogs
    }
  }
}
</script>
