<template>
    <main class="not-found">
        <Navbar />
        <section class="container">
            <div class="row justify-content-center mt-3 mt-sm-5">
                <div class="col text-center">
                    <img src="../assets/img/not-found.svg" alt="Not found image" width="300">
                    <h2 class="fw-bold text-green mt-4">Halaman Tidak Ditemukan</h2>
                    <h4 class="text-secondary">Maaf, halaman yang Anda cari tidak ditemukan</h4>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "NotFound",
    components: {
        Navbar
    }
}
</script>