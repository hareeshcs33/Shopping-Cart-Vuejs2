<template>
    <modal>
        <modal-header>
            <h3>Info Modal header</h3>
        </modal-header>
        <modal-body>
            <p>Info modal body...</p>
        </modal-body>
        <modal-footer>
            <button @click="close('modal closed')" class="btn btn-primary">close modal</button>
            <button @click="dismiss('modal dismissed')" class="btn btn-primary">dismiss modal</button>
        </modal-footer>
    </modal>
</template>

<script>
import Modal from '../modules/modals/components/modal.vue';
import ModalHeader from '../modules/modals/components/modal-header.vue';
import ModalFooter from '../modules/modals/components/modal-footer.vue';
import ModalBody from '../modules/modals/components/modal-body.vue';
import ModalMixin from '../modules/modals/mixins/modal-mixin';

export default {
    components: {
        Modal,
        ModalHeader,
        ModalFooter,
        ModalBody
    },
    mixins: [ModalMixin]
}
</script>