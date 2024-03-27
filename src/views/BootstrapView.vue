<script setup>
    import { ref } from 'vue';
    const isModalOpen = ref(false);

    const toggleModal = () => {
        isModalOpen.value = !isModalOpen.value;
    };
    import BootstrapModal from './BootstrapModal.vue';
</script>

<template>
    <div class="about">
        <p>This is an about page</p>
        <div>
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="85%"></b-skeleton>
            <b-skeleton animation="fade" width="70%"></b-skeleton>
            <b-skeleton-table
                :rows="5"
                :columns="4"
                :table-props="{ bordered: true, striped: true }"
            ></b-skeleton-table>
        </div>

        <b-button @click="toggleModal">Open Modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue" v-model="isModalOpen">
            <p class="my-4">Hello from modal!</p>
        </b-modal>

        <div class="d-flex gap-2 my-2">
            <!-- Using modifiers -->
            <b-button v-b-modal.my-modal>Show Modal</b-button>
            <!-- Using value -->
            <b-button v-b-modal="'my-modal'">Show Modal</b-button>

            <!-- The modal -->
            <b-modal id="my-modal">
                <p class="my-4">Hello From My Modal!</p>
            </b-modal>
        </div>
        <div class="d-flex gap-2 my-2">
            <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button>
            <b-button v-b-modal.modal-lg variant="primary">lg modal</b-button>
            <b-button v-b-modal.modal-sm variant="primary">sm modal</b-button>

            <b-modal id="modal-xl" size="xl" title="Extra Large Modal">
                Hello Extra Large Modal!
            </b-modal>
            <b-modal id="modal-lg" size="lg" title="Large Modal">Hello Large Modal!</b-modal>
            <b-modal id="modal-sm" size="sm" title="Small Modal">Hello Small Modal!</b-modal>
        </div>
        <BootstrapModal />

        <!-- collapse test -->
        <div>
            <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
            <b-collapse id="collapse-1" class="mt-2">
                <div class="card card-body">
                    <p class="card-text">Collapse contents Here</p>
                    <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
                    <b-collapse id="collapse-1-inner" class="mt-2">
                        <div class="card card-body">Hello!</div>
                    </b-collapse>
                </div>
            </b-collapse>
            <div class="my-2">
                <!-- Via multiple directive modifiers -->
                <b-button v-b-toggle.collapse-a.collapse-b>Toggle Collapse A and B</b-button>

                <!-- Via space separated string of IDs passed to directive value -->
                <b-button v-b-toggle="'collapse-a collapse-b'" class="mx-2">
                    Toggle Collapse A and B
                </b-button>

                <!-- Via array of string IDs passed to directive value -->
                <b-button v-b-toggle="['collapse-a', 'collapse-b']">
                    Toggle Collapse A and B
                </b-button>

                <!-- Elements to collapse -->
                <b-collapse id="collapse-a" class="mt-2">
                    <div class="card card-body">I am collapsible content A!</div>
                </b-collapse>
                <b-collapse id="collapse-b" class="mt-2">
                    <div class="card card-body">I am collapsible content B!</div>
                </b-collapse>
            </div>
        </div>
    </div>
</template>
