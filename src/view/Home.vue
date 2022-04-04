<script setup>

</script>
<template>
    <div>
        <p>
            <!-- use the router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
            <router-link to="/">Home</router-link>
            <router-link to="/productos">productos</router-link>
        </p>
    </div>
</template>