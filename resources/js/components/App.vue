<template>
    <div class="container">
        <!-- <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Welcome</div>
                            
                    <div class="card-body">
                        Work in progress
                    </div>
                </div>
            </div>
        </div> -->
            <router-view></router-view>
            <!-- <div>
                <PostList/>
            </div> -->
    </div>
</template>

<script>
import PostList from './PostList.vue'
import PostDetailPage from './PostDetailPage.vue'

    export default{
        name: "App",
        components: {
            PostList,
            PostDetailPage,
        }
    }

</script>
