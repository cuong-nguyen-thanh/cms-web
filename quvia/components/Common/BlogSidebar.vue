<template>
  <div class="widget-area" id="secondary">
    <div class="widget widget_categories" v-for="(group, index) in groups">
      <a :href="whitepapers[group].length > 0 ? `/whitepaper/${whitepapers[group][0].slug}` : '#'">
        <h3 class="widget-title">
          {{ group }}
        </h3>
      </a>
      <div class="post-wrap" v-if="group === item.group">
        <ul>
          <li v-for="(whitepaper, i) in whitepapers[group]" :class="{'sidebar-item-active': whitepaper.slug === item.slug}">
            <a :href="`/whitepaper/${whitepaper.slug}`">
              {{ whitepaper.title }}
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
  props: ['whitepapers', 'groups', 'item'],
  data: function () {
    console.log(this.groups)
    console.log(this.whitepapers)
    console.log(this.item)
    return {
      blogList: this.whitepapers
    }
  }
}
</script>
