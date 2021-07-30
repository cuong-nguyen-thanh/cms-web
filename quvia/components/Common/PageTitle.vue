<template>
    <div class="page-title-area bg-1">
        <div class="container">
            <div class="page-title-content">
                <h2>{{pageTitle}}</h2>
<!--                <ul>-->
<!--                    <li>-->
<!--                        <NuxtLink to="/">-->
<!--                            Whitepaper-->
<!--                        </NuxtLink>-->
<!--                    </li>-->
<!--                    <li class="activ">{{pageTitle}}</li>-->
<!--                </ul>-->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PageTitle',
    props: ['pageTitle']
}
</script>

