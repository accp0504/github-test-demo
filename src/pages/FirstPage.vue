<template>
  <div id="newVue">
    {{ message }}
    {{ details }}
  </div>
</template>

<script>
import {vm, vm2} from './NewVue'

export default {
  name: 'FirstPage',
  data () {
    return {
      message: 'FirstPage',
      // details: vm2.methods.details(), // js
      details: vm.details(), // vue
    }
  }
}
</script>
