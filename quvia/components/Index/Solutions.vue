<template>
    <div class="solutions-area pb-70">
        <div class="container">
            <div class="section-title">
                <h2>High-Performance Solutions</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            </div>

            <SolutionCard
                v-if="solutions !== []" 
                :singleSolutions="solutions"
            />
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