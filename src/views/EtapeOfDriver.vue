<template lang="html">
  <div class="centerx">
    <input
      v-model="colorLoading"
      type="color"
      name=""
      value=""
    >
    <vs-button
      type="gradient"
      color="danger"
      @click="openLoadingColor"
    >
      Danger
    </vs-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
// Vuesax styles
Vue.use(Vuesax, {
  // options here
})
export default {
  data() {
    return {
      colorLoading: '#7d0c3f',
    }
  },
  methods: {
    openLoadingColor() {
      this.$vs.loading({ color: this.colorLoading })
      setTimeout(() => {
        this.$vs.loading.close()
      }, 2000)
    },
  },
}
</script>
