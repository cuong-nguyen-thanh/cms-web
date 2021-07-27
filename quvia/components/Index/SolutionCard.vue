<template>
    <div class="row">
        <div 
            v-for="solution in singleSolutions"
            :key="solution.id"
            class="col-lg-4"
        >
            <div :class="`single-solutions ${solution.class}`">
                <div class="solutions-content">
                    <h3>
                        <NuxtLink :to="solution.slug">
                            {{solution.title}}
                        </NuxtLink>
                    </h3>
                    <p>
                        {{solution.shortDesc}}
                    </p>
                    <NuxtLink 
                        :to="solution.slug" 
                        class="read-more"
                    >
                        {{solution.btnText}}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SolutionCard',
    props: ['singleSolutions']
}
</script>