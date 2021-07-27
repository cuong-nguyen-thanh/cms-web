<template>
     <div class="team-area ptb-100">
        <div class="container">
            <div class="section-title">
                <h2>Our Expert Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>

            <div 
                class="row"
                v-if="teams !== []"
            >
                <div 
                    class="col-lg-3 col-sm-6"
                    v-for="team in teams"
                    :key="team.id"
                >
                    <div class="single-team">
                        <div class="image">
                            <img :src="team.img.url" alt="image">

                            <ul class="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="bx bxl-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="content">
                            <h3>{{team.name}}</h3>
                            <span>{{team.position}}</span>
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
    name: 'Team',

    data(){
        return{
            teams: []
        }
    },

    created: async function(){
        this.teams = await this.$strapi.find('teampages')
    }
}
</script>