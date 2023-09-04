<!-- 通用详情描述组件 具体属性参考下方props描述 yty-->
<template>
  <div class="descriptions" :style="styles">
    <!--  大小调试 需要时可扩展  -->
    <el-radio-group v-model="size" v-show="false">
      <el-radio label="">默认</el-radio>
      <el-radio label="medium">中等</el-radio>
      <el-radio label="small">小型</el-radio>
      <el-radio label="mini">超小</el-radio>
    </el-radio-group>
    <!--  带边框列表  -->
    <el-descriptions class="margin-top" title="" :column="columnSize || 3" :size="size" border
                     v-show="borderShow === true">
      <template slot="extra" v-if="false">
        <el-button type="primary" size="small">操作</el-button>
      </template>
      <el-descriptions-item v-for="item in columns" :span="item && item['span']">
        <template slot="label">
          <span :style="{
              color: item && item.required?'#f56c6c':'#F56C6C00',
              fontWeight: 'bold',
              padding: '0 4px'}"
          >*</span>
          {{ item && item['label'] }}
        </template>
        {{ item && item.value ? item.value : (data && data[item && item.key]) }}
      </el-descriptions-item>
    </el-descriptions>
    <!--  无边框列表  -->
    <el-descriptions class="margin-top" title="" :column="columnSize || 3" :size="size"
                     v-show="(!borderShow || borderShow === false) && data">
      <template v-for="item in columns">
        <el-descriptions-item :label="item && item['label']" :span="item && item['span']">
          <template slot="label">
            <span :style="{
              color: item && item.required?'#f56c6c':'#F56C6C00',
              fontWeight: 'bold',
              padding: '0 4px'}"
            >*</span>
            {{ item && item['label'] }}
          </template>
          <div class="item-value">
            {{ checkItemValue(item) }}
            <!--            {{ item && item.value ? item.value : (data && data[item && item.key]) }}-->
            <el-button v-if="item.downloadConfig !== undefined" type="primary" size="mini"
                       style="padding: 0 15px; margin-left: 5px; height: 20px"
                       @click="myDownload(item.downloadConfig)">下载
            </el-button>
          </div>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script>
import {dictionaryConversion} from "@/utils/util";

export default {
  name: 'Descriptions',
  /*
  * borderShow: 是否展示表格形式描述
  * columns: 自定义描述列集合
  * data: 数据
  * {
  *   label:'名称',
  *   value:'值', // 如果value有值，将覆盖data中的值
  *   span: 跨列,
  *   downloadConfig: {path:下载地址/下载接口地址, type:window（默认）/api 浏览器下载/接口下载},
  *   required: 是否带*,
  *   dict: 字段对应的字典列表,
  * }
  * styles: 整体样式覆盖（值为字符串）
  * columnSize: 一行展示几条数据
  * */
  props: ['borderShow', 'columns', 'data', 'styles', 'columnSize'],
  data() {
    return {
      size: '',
    };
  },
  methods: {
    dictionaryConversion,
    checkItemValue(item) {
      const data = this.data
      if (item?.value) {
        return item.value
      } else {
        if (data) {
          if (item.dict) {
            return dictionaryConversion(data[item && item.key], item && item.dict)
          } else {
            return data[item && item.key]
          }
        }
      }
      return ''
    },
    myDownload(downloadConfig) {
      if (downloadConfig) {
        const {path, type} = downloadConfig || {path: '', type: 'window'};
        if (type === 'window') {
          path && window.open(path, "_blank");
        }
        if (type === 'api') {
          // 接口调用待扩展
          path && window.open(path, "_blank");
        }
      }
    },
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.descriptions {
  padding: 15px 50px;

  .item-value {
    display: flex;
  }
}
</style>
