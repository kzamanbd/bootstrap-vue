<template>
    <div>
        <div class="mb-2">
            <b-button @click="showMsgBoxOne">Simple msgBoxOk</b-button>
            Return value: {{ String(boxOne) }}
        </div>
        <div class="mb-1">
            <b-button @click="showMsgBoxTwo">msgBoxOk with options</b-button>
            Return value: {{ String(boxTwo) }}
        </div>
    </div>
    <div class="d-flex flex-column text-md-center">
        <div class="p-2">
            <b-button id="tooltip-button-show-event" variant="primary">I have a tooltip</b-button>
        </div>

        <div class="p-2">
            <b-button class="px-1" @click="onOpen">Open</b-button>
            <b-button class="px-1" @click="onClose">Close</b-button>
        </div>

        <b-tooltip ref="tooltip" target="tooltip-button-show-event">
            Hello <strong>World!</strong>
        </b-tooltip>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                boxOne: '',
                boxTwo: ''
            };
        },
        methods: {
            showMsgBoxOne() {
                this.boxOne = '';
                this.$bvModal
                    .msgBoxOk('Action completed')
                    .then((value) => {
                        this.boxOne = value;
                    })
                    .catch((err) => {
                        // An error occurred
                        console.error(err);
                    });
            },
            showMsgBoxTwo() {
                this.boxTwo = '';
                this.$bvModal
                    .msgBoxOk('Data was submitted successfully', {
                        title: 'Confirmation',
                        size: 'sm',
                        buttonSize: 'sm',
                        okVariant: 'success',
                        headerClass: 'p-2 border-bottom-0',
                        footerClass: 'p-2 border-top-0',
                        centered: true
                    })
                    .then((value) => {
                        this.boxTwo = value;
                    })
                    .catch((err) => {
                        // An error occurred
                        console.error(err);
                    });
            },
            onOpen() {
                this.$refs.tooltip.$emit('open');
            },
            onClose() {
                this.$refs.tooltip.$emit('close');
            }
        },
        mounted() {
            console.log('mounted', this, this.$bvModal);
        }
    };
</script>
