<template>
    <main class="menu-detail">
        <Navbar />
        <section class="container">
            <!-- Breadcrumb -->
            <div class="row mt-3 mt-sm-5">
                <div class="col">
                    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-dark link-underline link-underline-opacity-0">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link to="/menu" class="text-dark link-underline link-underline-opacity-0">Menu</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Menu Order
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!-- Content -->
            <div class="row mt-1 mt-sm-3">
                <div class="col-md-6">
                    <img :src="`/img/${product.image}`" alt="Menu Images" width="100%" class="img-fluid rounded-4 shadow">
                </div>
                <div class="col-md-6">
                    <h2 class="fw-bolder mt-4 mt-sm-0">{{ product.name }}</h2>
                    <hr>
                    <h4><i class="bi bi-tag-fill me-1"></i>Rp. {{ product.price }}</h4>
                    <form class="mt-3" v-on:submit.prevent>
                        <div class="form-group mb-2">
                            <label for="order_amount">Jumlah Pesan</label>
                            <input type="number" class="form-control" id="order_amount" v-model="order.order_amount"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="description">Keterangan</label>
                            <textarea 
                                class="form-control" 
                                id="description" 
                                rows="3" 
                                placeholder="Misal : tambah es, lebihin topping, dll..."
                                v-model="order.description"
                            >
                            </textarea>
                        </div>
                        <button type="submit" class="btn btn-green w-100" @click="ordering">
                            <i class="bi bi-cart me-1"></i>
                            Pesan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SuccessToast from '@/components/SuccessToast.vue'
import { useToast } from "vue-toastification"
import axios from 'axios'

export default {
    name: "MenuDetail",
    data() {
        return {
            product: {},
            order: {}
        }
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
    methods: {
        setProduct(data) {
            this.product = data
        },
        ordering() {
            if(this.order.order_amount){
                this.order.product = this.product;
                axios.post('https://seinas-cafe-data.onrender.com/carts', this.order)
                    .then(() => {
                        this.$router.push({path: '/cart'})
                        this.toast.success(SuccessToast, {
                            position: "top-right",
                            timeout: 3000,
                            closeOnClick: true,
                            pauseOnFocusLoss: true,
                            pauseOnHover: true,
                            draggable: true,
                            draggablePercent: 0.6,
                            showCloseButtonOnHover: false,
                            hideProgressBar: true,
                            closeButton: "button",
                            icon: true,
                            rtl: false
                        });
                    })
                    .catch((err) => console.log(err))
            } else {
                this.toast.error("Mohon isi jumlah pesanan", {
                    position: "top-right",
                    timeout: 3000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            }
        }
    },
    mounted() {
        axios
            .get('https://seinas-cafe-data.onrender.com/products/'+ this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error))
    },
    components: {
        Navbar
    }
}
</script>