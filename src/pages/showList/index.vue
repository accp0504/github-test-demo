<!-- 用户中心-仓单查询-仓单详情 -->
<template>
  <div class="warehouseReceiptDetail" v-loading="loading">
		1233
    <div>
      <div class="warehouseReceiptDetailTitle">仓单信息</div>
      <Descriptions :data="descriptionsData1" :columns="descriptionsColumns1"/>
    </div>
    <div>
      <div class="warehouseReceiptDetailTitle">入库单信息</div>
      <TableListCom :data="tableData1" :columns="tableColumns1"/>
    </div>
    
    <div>
      <div class="warehouseReceiptDetailTitle">协议信息</div>
      <Descriptions :data="descriptionsData2" :columns="descriptionsColumns2"/>
    </div>
    <div>
      <div class="warehouseReceiptDetailTitle">放款信息</div>
      <TableListCom :data="tableData2" :columns="tableColumns2"/>
    </div>
    <div class="handle">
      <el-button @click="goBack()">返回</el-button>
    </div>
  </div>
</template>

<script>
import Descriptions from "@/components/Descriptions";
import TableListCom from "@/components/TableListCom";
import LocalDictionaryMap from "@/utils/localDictionaryMap.json";

export default {
  name: "Online",
  components: {
    FinancingApplicationInformation,
    Descriptions,
    TableListCom
  },
  data() {
    return {
      id: null,
      // 遮罩层
      loading: true,
      // 表格数据
      list: [],
      // 仓单信息描述
      descriptionsData1: {},
      descriptionsColumns1: [
        {label: '仓单编号', key: 'warehouseReceiptNumber'},
        {label: '客户名称', key: 'customer'},
        {label: '仓库地址', key: 'warehouseAddress'},
        {label: '存货人', key: 'stockMan'},
        {label: '收货人', key: 'consignee'},
        {label: '交货人', key: 'deliverer'},
        {label: '保险人', key: 'insurer'},
        {label: '保险单号', key: 'insuranceNumber'},
        {label: '保险费', key: 'insuranceFee'},
        {label: '保险有效期起', key: 'insuranceValidityPeriodStart'},
        {label: '保险有效期止', key: 'insuranceValidityPeriodEnd'},
        {label: '创建时间', key: 'receiptTime'},
        {label: '附件', key: 'surveillanceVideoUrl'},//仓单监控视频地址
      ],
      // 协议信息描述
      descriptionsData2: {},
      descriptionsColumns2: [
        {label: '系统协议编号', key: 'sysProtocolNo'},
        {label: '纸质协议编号', key: 'protocolNumber'},
        {label: '协议状态', key: 'protocolStatus', dict: LocalDictionaryMap.protocolStatusMapList},
        {label: '借款企业名称', key: 'entName'},
        {label: '监管企业', key: 'supEnterpriseName'},
        {label: '金融机构', key: 'finInstitutionName'},
        {label: '协议起始日', key: 'protocolStartDate'},
        {label: '协议到期日', key: 'protocolEndDate', span: 2},
        {label: '协议附件', key: '', span: 3, downloadConfig: {path: 'https://www.baidu.com', type: 'window'}},
        {label: '备注', key: 'remark'},
      ],
      // 入库单信息
      tableData1: [],
      tableColumns1: [
        {key: 'inputTime', label: "入库日期", width: '200'},
        {key: 'storageSource', label: "入库方式", width: '200'},
        {key: '11', label: "货物来源", width: '200'},
        {key: 'goodsName', label: "货物名称", width: '200'},
        {key: '111', label: "货类", width: '200'},
        {key: 'goodsPackage', label: "包装", width: '200'},
        {key: 'inputWeight', label: "入库重量", width: '200'},
        {key: 'inputNum', label: "入库数量", width: '200'},
        {key: 'currentWeight', label: "在库重量", width: '200'},
        {key: '1111', label: "在库数量", width: '200'},
        {key: 'specifications', label: "货物规格", width: '200'},
        {key: 'storageMark', label: "货物标记", width: '200'},
        {key: 'damageStandard', label: "损耗标准", width: '200'},
        {key: 'storageRate', label: "仓储费率", width: '200'},
      ],
      // 放款信息
      tableData2: [],
      tableColumns2: [
        {key: 'repaymentCode', label: "放款编号", width: '200'},
        {key: 'bankName', label: "金融机构", width: '200'},
        {key: 'currency', label: "币种", width: '200', dict: LocalDictionaryMap.currencyMapList},
        {key: 'amount', label: "放款金额", width: '200'},
        {key: 'loanRepaymentTime', label: "放款日期", width: '200'},
        {key: 'agreedRepaymentTime', label: "到期日期", width: '200'},
        {key: 'assetState', label: "放款状态", width: '200'},
      ],
    };
  },
  props: ['visible'],
  created() {
    this.id = this.$route.params.id
		debugger
    // this.getList();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>
<style scoped>

.warehouseReceiptDetail {
  padding: 20px;
}

.warehouseReceiptDetailTitle {
  margin: 20px 0 10px;
  font-size: 15px;
}

.handle {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}
</style>
