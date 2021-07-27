<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogRightSidebar />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogRightSidebar from '../components/blog-right-sidebar/BlogRightSidebar'
import Footer from '../layouts/Footer'
 
export default {
    components: {
        Navbar,
        PageTitle,
        BlogRightSidebar,
        Footer,
    }
}
</script>