<template>
    <main class="success-order">
        <Navbar />
        <section class="container">
            <div class="row justify-content-center mt-3 mt-sm-5">
                <div class="col text-center">
                    <img src="/public/img/waiting.svg" alt="Waiting image" width="300">
                    <h2 class="fw-bold text-green">Pesanan Berhasil</h2>
                    <h4 class="text-secondary">Pesanan Anda sedang diproses 
                        <i class="bi bi-hourglass-split"></i>
                        <br>Mohon Menunggu
                    </h4>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "SuccessOrder",
    components: {
        Navbar
    }
}
</script>