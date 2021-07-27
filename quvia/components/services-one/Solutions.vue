<template>
    <div class="solutions-area section-width pb-100">
        <div class="container">
            <div class="section-title">
                <h2>High-Performance Solutions</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

                <SolutionCard
                    v-if="solutions !== []" 
                    :singleSolutions="solutions"
                />

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
</template>

<script>
import SolutionCard from '../Index/SolutionCard'

export default {
    name: 'Solutions',

    components: {
        SolutionCard
    },
    
    data(){
        return{
            solutions: []
        }
    },

    created: async function(){
        this.solutions = await this.$strapi.find('solutioncards')
    }
}
</script>