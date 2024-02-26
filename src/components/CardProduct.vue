<template>
    <div class="card shadow rounded-4" style="width: 18rem;">
        <img :src="`/src/assets/img/${product.image}`" class="card-img-top rounded-top-4" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
                <i class="bi bi-tag-fill me-1"></i>
                Rp. {{ product.price }}
            </p>
            <router-link :to="`/menu/${product.id}`" class="btn btn-green">
                <i class="bi bi-cart me-1"></i>
                Pesan
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardProduct",
    props: ['product']
}
</script>