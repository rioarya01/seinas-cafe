<template>
    <main class="menu">
        <Navbar />
        <section class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2>List <span class="fw-bolder">Menu</span></h2>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col">
                    <div class="input-group mb-3">
                        <input
                            v-model="search"
                            type="text" 
                            class="form-control" 
                            placeholder="Cari Menu Kesukaan Anda..." 
                            aria-label="Cari" 
                            aria-describedby="basic-addon1"
                            @keyup="searchMenu"
                        >
                        <span class="input-group-text bg-green text-white" id="basic-addon1">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
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
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios'

export default {
    name: "Menu",
    data() {
        return {
            products: [],
            search: ''
        }
    },
    methods: {
        setProducts(data) {
            this.products = data
        },
        searchMenu() {
            axios
            .get('https://seinas-cafe-data.onrender.com/products/?q=' + this.search)
            .then((response) => {
                this.setProducts(response.data)
                console.log(response.data);
            })
            .catch((error) => console.log(error))
        }
    },
    mounted() {
        axios
            .get('https://seinas-cafe-data.onrender.com/products')
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error))
    },
    components: {
        Navbar,
        CardProduct
    }
}

</script>