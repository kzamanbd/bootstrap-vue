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
        <div class="d-flex gap-4 my-4">
            <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
            <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
            <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>

            <b-modal id="modal-xl" size="xl" title="Extra Large Modal">
                Hello Extra Large Modal!
            </b-modal>
            <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
            <b-modal id="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</b-modal>
        </div>
    </div>
</template>
