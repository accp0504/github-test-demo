<template>
  <div id="newVue">
    <p v-bind:class="{'bindClass2': isShowClass2}">{{ message | messageLength | maxLength }}</p>
    <p>
      <a :href="url">{{ details }}</a>
    </p>
    <span>模板语法:</span>
    <span v-html="html" v-bind:class="{'bindClass': isShowClass}"></span>
    <span v-bind:id="'isShowId-' + isShowId">v-bind:id 指令</span>
    <p>
      <span v-if="createRandom(0, 5) > isShowId" >v-if:{{random}}>{{isShowId}}</span>
      <span v-else v-bind:title="'v-if:false'">v-else:{{random}}>{{isShowId}}</span>
      <input v-model="message" />
      <input type="button" @click="reverseMessage" value="反转" />
    </p>

  </div>
</template>

<script>
import {vm, vm2} from './NewVue'
let that = ''

export default {
  name: 'FirstPage',
  created () {
    that = this
  },
  data () {
    return {
      message: 'FirstPage',
      details: vm.details(), // vue
      details2: vm2.methods.details(), // js
      html: '<span>v-bind:class 指令</span>',
      isShowClass: true,
      isShowClass2: false,
      isShowId: '1',
      url: 'https://www.runoob.com/vue2/vue-template-syntax.html',
      random: ''
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    createRandom: function (min, max) {
      this.random = Math.floor(Math.random() * (max - min)) + min
      return this.random
    }
  },
  filters: {
    messageLength: function (val) {
      if (val.length > 5) {
        return val.toString().substring(0, 5) + ' ...'
      } else {
        return val
      }
    },
    maxLength: function (val) {
      if (val.toString().indexOf('...') !== -1) {
        that.isShowClass2 = true
      } else {
        that.isShowClass2 = false
      }
      return val
    }
  }
}
</script>

<style>
.bindClass, .bindClass2 {
  color: red;
}

#isShowId-1 {
  color: blue;
}
</style>
