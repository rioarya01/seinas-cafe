<template>
    <main class="home">
        <section class="container ">
            <Navbar />
            <Hero />
            <div class="row mt-4">
                <div class="col">
                    <h2>Favorites <span class="fw-bolder">Menu</span></h2>
                </div>
                <div class="col">
                    <router-link to="/menu" class="btn btn-outline-green fw-bolder float-end">
                        <i class="bi bi-arrow-right me-1"></i>
                        Lihat Semua
                    </router-link>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-sm-6 col-lg-4 col-xl-3 mt-4" v-for="product in products" :key="product.id">
                    <CardProduct :product="product" class="mx-auto"/>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
    name: 'Home',
    data() {
        return {
            products: []
        }
    },
    methods: {
        setProducts(data) {
            this.products = data
        }
    },
    mounted() {
        axios
            .get('https://seinas-cafe-data.onrender.com/best-products')
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error))
    },
    components: {
        Navbar,
        Hero,
        CardProduct
    }
}

</script>