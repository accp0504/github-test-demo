<!-- 通用详情表格组件 具体属性参考下方props描述 yty-->
<template>
  <div :class="borderShow?'table-list-com':'table-list-com-default'">
    <!--  仓单解押信息  -->
    <el-table :data="tableData" v-show="type==='仓单解押信息'" :max-height="tableHeight">
      <el-table-column prop="warehouseReceiptNumber" label="仓单编号" width="180"/>
      <el-table-column prop="inputTime" label="入库日期"/>
      <el-table-column prop="warehouseInstitutions" label="仓储机构"/>
      <el-table-column prop="goodsName" label="货物名称"/>
      <el-table-column prop="goodsType" label="货类"/>
      <el-table-column prop="goodsPackage" label="包装"/>
      <el-table-column prop="goodsWeight" label="重量"/>
      <el-table-column prop="currentNum" label="数量"/>
      <el-table-column prop="goodsWeight" label="本次解押重量"/>
      <el-table-column prop="goodsWeight" label="本次解押数量"/>
      <el-table-column prop="goodsWeight" label="监管解押重量"/>
      <el-table-column prop="goodsWeight" label="监管解押数量"/>
    </el-table>
    <!--  解押后仓单信息  -->
    <el-table :data="tableData" v-show="type==='解押后仓单信息'" :max-height="tableHeight">
      <el-table-column prop="warehouseReceiptNumber" label="仓单编号" width="180"/>
      <el-table-column prop="inputTime" label="入库日期"/>
      <el-table-column prop="warehouseInstitutions" label="仓储机构"/>
      <el-table-column prop="goodsName" label="货物名称"/>
      <el-table-column prop="goodsType" label="货类"/>
      <el-table-column prop="goodsPackage" label="包装"/>
      <el-table-column prop="goodsWeight" label="重量"/>
      <el-table-column prop="currentNum" label="数量"/>
    </el-table>
    <!--  业务办理流水  -->
    <el-table :data="tableData" v-show="type==='业务办理流水'" :max-height="tableHeight" style="width: 100%">
      <el-table-column type="index" label="序号" width="150"/>
      <el-table-column prop="createTime" label="操作时间" min-width="15%"/>
      <el-table-column prop="taskName" label="业务流程" min-width="15%"/>
      <el-table-column prop="description" label="说明信息" min-width="50%"/>
    </el-table>
    <!--  自定义列表  -->
    <el-table :data="tableData" v-show="!type && tableData" :max-height="tableHeight" style="width: 100%">
      <template v-if="autoIndexShow">
        <el-table-column type="index" label="序号" width="150"/>
      </template>
      <template v-for="data in columnList">
        <el-table-column :prop="data.key" :value="123" :label="data.label" :min-width="data.width">
          <template slot-scope="scope">
            {{data && data.dict ? dictionaryConversion( scope.row[data.key], data.dict) : scope.row[data.key]}}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import {dictionaryConversion} from "@/utils/util";

export default {
  name: 'tableListCom',
  components: {},
  /*
  * data: 数据源
  * columns: 自定义表格列集合
  * type: 要展示的表格类型（常用类型）: '仓单解押信息','解押后仓单信息','业务办理流水'
  * borderShow: 是否展示外围容器border样式
  * indexShow: 是否展示表格自增列
  * height: 表格高度自定义
  * */
  props: [
    'data', 'columns', 'type', 'borderShow', 'indexShow', 'height'
  ],
  data() {
    return {
      tableData: [],
      columnList: [],
      autoIndexShow: false,
      tableHeight: 0,
      total: 10,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
      },
    }
  },
  methods: {
    dictionaryConversion
  },
  watch: {
    data: {
      handler(val) {
        this.tableData = val || []
      },
      immediate: true,
    },
    columns: {
      handler(val) {
        this.columnList = val || []
      },
      immediate: true,
    },
    indexShow: {
      handler(val) {
        this.autoIndexShow = val || false
      },
      immediate: true,
    },
    height: {
      handler(val) {
        this.tableHeight = val || 262 * 2
      },
      immediate: true,
    },
  }

}
</script>

<style lang="scss" scoped>

.table-list-com {
  padding: 15px 25px;
  margin: 15px 25px 25px;
  border: 1px solid #eee;
}

.table-list-com-default {
  padding: 15px 25px;
  margin: 15px 25px 25px;
}

</style>
