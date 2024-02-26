<template>
    <main class="cart">
        <Navbar :updateCart="carts"/>
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
                                Cart
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!-- Content -->
            <div class="row">
                <div class="col">
                    <h2>Pesanan <span class="fw-bolder">Saya</span></h2>
                    <div class="table-responsive mt-3">
                        <table class="table">
                            <thead class="table-success">
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Menu</th>
                                <th scope="col">Keterangan</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Total Harga</th>
                                <th scope="col">Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Content -->
                                <tr v-for="(cart, index) in carts" :key="cart.id">
                                    <th>{{index+1}}</th>
                                    <td>
                                        <img :src="`/public/img/${cart.product.image}`" alt="Menu Images" width="200" class="img-fluid rounded-4 shadow">
                                    </td>
                                    <td><h5>{{cart.product.name}}</h5></td>
                                    <td><p>{{cart.description ? cart.description : "-"}}</p></td>
                                    <td><p>{{ cart.order_amount }}</p></td>
                                    <td><p>Rp. {{ cart.product.price }}</p></td>
                                    <td class="fw-bold">
                                        <p>Rp. {{ cart.product.price*cart.order_amount }}</p>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" @click="deleteCart(cart.id)">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <!-- Price Total -->
                                <tr>
                                    <td colspan="6">
                                        <h4 class="text-end fw-bold">Total Harga : </h4>
                                    </td>
                                    <td>
                                        <h4 class="fw-bold text-end">Rp. {{ priceTotal }}</h4>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Form Checkout -->
            <div class="row justify-content-end">
                <div class="col-md-4">
                    <form class="mt-3" v-on:submit.prevent>
                        <div class="form-group mb-2">
                            <label for="name">Nama : </label>
                            <input type="text" class="form-control" id="name" v-model="order.name"/>
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTable">Nomor Meja : </label>
                            <input type="text" class="form-control" id="noTable" v-model="order.noTable"/>
                        </div>
                        <button type="submit" class="btn btn-green w-100" @click="checkout">
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
import DeleteToast from '@/components/DeleteToast.vue'
import { useToast } from "vue-toastification"
import axios from 'axios'

export default {
    name: 'Cart',
    data() {
        return {
            carts: [],
            order: {}
        }
    },
    setup() {
        const toast = useToast();
        return { toast };
    },
    methods: {
        setCarts(data) {
            this.carts = data;
        },
        deleteCart(id) {
            axios
                .delete(`https://seinas-cafe-data.onrender.com/carts/${id}`)
                .then(() => {
                    this.toast.error(DeleteToast, {
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
                        icon: {
                            iconClass: "bi bi-trash"
                        },
                        rtl: false
                    });

                    // Update Carts Data
                    axios
                        .get('https://seinas-cafe-data.onrender.com/carts')
                        .then((response) => this.setCarts(response.data))
                        .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))
        },
        checkout() {
            if(this.order.name && this.order.noTable) {
                this.order.carts = this.carts;
                axios.post('https://seinas-cafe-data.onrender.com/orders', this.order)
                    .then(() => {
                        this.$router.push({path: '/success-order'})
                        this.toast.success("Pesanan Anda Berhasil Dibuat", {
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

                        // Clear Carts
                        this.carts.map(function(item) {
                            return axios
                            .delete(`https://seinas-cafe-data.onrender.com/carts/${item.id}`)
                            .catch((error) => console.log(error))
                        })
                    })
                    .catch((error) => console.log(error))
            } else {
                this.toast.error("Mohon isi Nama dan Nomor Meja Anda", {
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
            .get('https://seinas-cafe-data.onrender.com/carts/')
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error))
    },
    computed: {
        priceTotal() {
            return this.carts.reduce(function(items, data) {
                return items+(data.product.price*data.order_amount);
            }, 0);
        }
    },
    components: {
        Navbar,
    }
}
</script>