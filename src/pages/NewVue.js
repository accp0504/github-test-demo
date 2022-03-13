import Vue from 'vue'

var vm = new Vue({
  el: '#newVue',
  data: {
    site: "菜鸟教程",
    url: "www.runoob.com",
    alexa: "10000"
  },
  methods: {
    details: function() {
      return  this.site + " - 学的不仅是技术，更是梦想！";
    }
  }
})

let vm2 = {
  data: '111',
  methods: {
    details: function() {
      return  this.site + " - 学的不仅是技术，更是梦想！";
    }
  }
}

// export default vm2; // 导出一个
export {vm, vm2}; // 导出多个
