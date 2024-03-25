<script setup>
    import { ref } from 'vue';
    const isModalOpen = ref(false);

    const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value;
    };
</script>

<template>
    <div class="about">
        <p>This is an about page</p>
        <div>
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
        </div>

        <button @click="toggleModal">Open Modal</button>

        <b-modal id="modal-1" title="BootstrapVue" v-model="isModalOpen">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>
</template>
