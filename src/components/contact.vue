<template>
  <div class="home">
    <h1>contact</h1>
    <button @click="addModal" class="btn btn-info">Open Modal</button>
  </div>
</template>
<script>
import ModalService from '../modules/modals/services/modal.service';
import InfoModal from './info-modal.vue';

export default {
  methods: {
    addModal(){
      ModalService.open(InfoModal);
    }
  },
  components: {
    InfoModal
  }
}
</script>