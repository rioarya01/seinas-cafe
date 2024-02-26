<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand fs-2 fw-bold text-green" href="#">
                <i class="bi bi-shop me-1"></i>
                Seina's Cafe
            </a>
            <button 
                class="navbar-toggler border-0" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <!-- Icon Button -->
                <svg xmlns="http://www.w3.org/2000/svg" 
                    height="24" 
                    viewBox="0 -960 960 960" 
                    width="24"
                    style="fill: #0D9276;"
                >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-120h800v120q0 33-23.5 56.5T800-120H160Zm0-120v40h640v-40H160Zm320-180q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-36 0-57 20t-77 20v-80q36 0 57-20t77-20q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q56 0 79 20t55 20v80q-56 0-75-20t-55-20q-36 0-58 20t-78 20q-56 0-77-20t-57-20ZM80-560v-40q0-115 108.5-177.5T480-840q183 0 291.5 62.5T880-600v40H80Zm400-200q-124 0-207.5 31T166-640h628q-23-58-106.5-89T480-760Zm0 520Zm0-400Z"/>
                </svg>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/menu">Menu</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cart">
                            <div class="d-flex align-items-center">
                                <span class="fs-5"><i class="bi bi-bag-fill me-1"></i>Pesanan</span>
                                <span class="badge bg-green ms-2">{{ updateCart ? updateCart.length : order_amount.length }}</span>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
</template>

<script>
import axios from 'axios';

export default {
    name: "Navbar",
    data() {
        return {
            order_amount: []
        }
    },
    props: ["updateCart"],
    methods: {
        setAmount(data) {
            this.order_amount = data
        }
    },
    mounted() {
        axios
            .get('https://seinas-cafe-data.onrender.com/carts')
            .then((response) => this.setAmount(response.data))
            .catch((error) => console.log(error))
    }
}
</script>