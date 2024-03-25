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

        <b-button @click="toggleModal">Open Modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue" v-model="isModalOpen">
            <p class="my-4">Hello from modal!</p>
        </b-modal>

        <div class="d-flex gap-4 my-4">
            <!-- Using modifiers -->
            <b-button v-b-modal.my-modal>Show Modal</b-button>
            <!-- Using value -->
            <b-button v-b-modal="'my-modal'">Show Modal</b-button>

            <!-- The modal -->
            <b-modal id="my-modal">
                <p class="my-4">Hello From My Modal!</p>
            </b-modal>
        </div>
    </div>
</template>
