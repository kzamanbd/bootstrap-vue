<script setup>
    import { ref } from 'vue';
    import TheWelcome from '../components/TheWelcome.vue';
    const isModalOpen = ref(false);
</script>

<template>
    <main>
        <TheWelcome />
        <button @click="isModalOpen = true">Open Modal</button>

        <b-modal id="modal-1" title="BootstrapVue" v-model="isModalOpen">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </main>
</template>
