<template>
    <h1>{{ msg }}</h1>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const msg = ref("Hello World!")

onMounted(async () => {
    const pkg = await import("../wasm/pkg/index.js");
    const flalt32 = new Float32Array(100)

    flalt32.fill(10)
    pkg.transfer_to_wasm(flalt32, 100)

    msg.value = msg.value + "WASM已加载!"
})
</script>