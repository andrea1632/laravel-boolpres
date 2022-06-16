<template>
    <div>
        <h1>Titolo:{{ post.title }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'PostDetailPage',
        data() {
            return {
                post: [],
            }
        },
        methods: {
            getPost() {
                axios.get(`http://127.0.0.1:8000/api/posts/${ this.$route.params.id }`)
                    .then((res) => {
                        console.log(res.data);
                        this.post = res.data;
                    })
            }
        },
        mounted() {
            this.getPost();
        }
    }
</script>