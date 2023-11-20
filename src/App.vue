<template>
    <h1>{{ msg }}</h1>
    <h4>Tauri事件信息:{{ returnValue }}</h4>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { invoke } from '@tauri-apps/api/tauri'

const msg = ref("Hello World!")

const returnValue = ref('')

invoke('my_custom_command', {
    number: 42,
})
    .then((res) =>
        returnValue.value = `Message: ${res.message}, Other Val: ${res.other_val}`

    )
    .catch((e) => console.error(e))

onMounted(async () => {
    const pkg = await import("wasm");
    const flalt32 = new Float32Array(100)

    flalt32.fill(10)
    pkg.transfer_to_wasm(flalt32, 100)

    msg.value = msg.value + "WASM已加载!"
})
</script>