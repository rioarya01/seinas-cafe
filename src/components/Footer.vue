<template>
    <footer class="my-5">
        <div class="container">
            <hr class="border border-success">
            <div class="row">
                <div class="col text-center">
                    <p>&copy; {{ new Date().getFullYear() }} Create with 
                        <i class="bi bi-balloon-heart-fill text-danger"></i> by
                        <a href="https://github.com/rioarya01" target="_blank" class="fw-semibold text-green text-green-hover link-underline link-underline-opacity-0">Rio Arya</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>