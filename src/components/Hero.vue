<template>
    <div class="hero">
        <!-- Desktop -->
        <div class="d-none d-md-block">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h1><span class="fw-bold text-green">Cafe Pilihan Kamu, </span><br>hanya di genggamanmu</h1>
                            <h5 class="fw-medium text-secondary">Gabut? Laper? Mager? Pesan sekarang dan rasakan nikmatnya.</h5>
                            <router-link to="/menu" class="btn btn-lg btn-green mt-2">
                                <i class="bi bi-cart me-1"></i>
                                Pesan
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="/public/img/hero.webp" alt="Hero Images" width="100%" class="rounded-4 shadow">
                </div>
            </div>
        </div>
        <!-- Mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row mt-4">
                <div class="col-md-6 mb-3">
                    <img src="/public/img/hero.webp" alt="Hero Images" width="100%" class="rounded-4 shadow">
                </div>
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h1><span class="fw-semibold text-green">Cafe Pilihan Kamu, </span><br>hanya di genggamanmu</h1>
                            <h5 class="fw-medium text-secondary">Gabut? Laper? Mager? Pesan sekarang dan rasakan nikmatnya.</h5>
                            <router-link to="/menu" class="btn btn-lg btn-green mt-2">
                                <i class="bi bi-cart me-1"></i>
                                Pesan
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>