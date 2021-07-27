<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="services-details">
                        <h3>{{details[0].title}}</h3>

                        <img :src="details[0].img.url" alt="Image">

                        <span v-html="details[0].longText"></span>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area" id="secondary">
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
                        
                        <section class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>
                            <div class="post-wrap">
                                <ul>
                                    <li>
                                        <a href="#">Blockchain <span>(10)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Cyber security <span>(20)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Cybercrime <span>(10)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Global news <span>(12)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Ransomware <span>(16)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Whitepapers <span>(17)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="widget widget_tag_cloud">
                            <h3 class="widget-title">Tags</h3>
                            <div class="post-wrap">
                                <div class="tagcloud">
                                    <a href="#">Blockchain (3)</a>
                                    <a href="#">Cyber security (3)</a>
                                    <a href="#">Cybercrime (2)</a>
                                    <a href="#">Global news (2)</a>
                                    <a href="#">Ransomware (1)</a>
                                    <a href="#">Whitepapers (2) </a>
                                </div>
                            </div>
                        </section>       
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ServicesDetails',
    props: ['servicesDetails'],
    data: function () {
        return {
            details: this.servicesDetails,
        }
    }
}
</script>