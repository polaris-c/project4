<template>
  <div class="datebaseTable">
    <div>C-1 Datebase table</div>
    
    <div style="margin-top: 15px;">
      <el-row type="flex" class="row-bg" justify="space-between">

        <!-- 搜索栏 -->
        <el-col :span="9">
        <el-input placeholder="请输入内容" v-model="searchInput" class="">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-col>
        
        <!-- 新增 -->
        <el-col :span="3">
          <el-button class="handleAdd" type="primary" @click="handleAdd" :disabled="flag" round>新 增</el-button>
        </el-col>
      </el-row>
    </div>
    
    <!-- 展示表格 -->
    <div style="margin-top: 15px;">
      <el-table :data="tableData" style="width: 100%" border stripe highlight-current-row>
        <el-table-column label="日期" prop="date" width="180"></el-table-column>
        <el-table-column label="编号" prop="name"></el-table-column>
        <el-table-column label="地点" prop="address"></el-table-column>
        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button size="mini" @click="showDetails(scope.$index, scope.row)" style="margin-left: 10px;">详细</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        searchInput: '',
        flag: false,
        tableData: []
      }
    },

    mounted() {
      let vm = this
      vm.getData()
    },

    methods: {
      getData() {
        let vm = this
        this.$http.get('/api/tableData').then(
          (response) => {
            if (response.body.resData.resultCode == 0) {
              console.log('response is OK:', response)
              // vm.tableData = response.body.resData.data.tableData
              /*vm.$set(target:这里是this所指的实例对象，key:这里是实例对象中data的属性，value:res返回值)*/
              vm.$set(vm, 'tableData', response.body.resData.data.tableData) 
              console.log('responseData:', vm.tableData)
            }
            else{
              console.log('response code error!', response)
            }
          }, 
          (response) => {
            console.log('response is error:', response)
          }
        );
      },

      handleAdd() {
        this.$router.push('/functionA/A1add')
      },

      showDetails(index, row) {
        console.log('showDetails $index:', index)
        console.log('showDetails row:', row)
        this.$store.commit('selectTableItem', row)

        this.$router.push('/functionA/A1details') 
      },

      handleEdit(index, row) {
        console.log('handleEdit $index:', index)
        console.log('handleEdit row:', row)
        this.$store.commit('selectTableItem', row)

        this.$router.push('/functionA/A1edit') 
      },

      handleDelete(index, row) {
        console.log(index, row)
      }
    }
}
</script>

<style scoped>
.handleAdd {
    /*background-color: #0593D3;*/
}
.datebaseTable {
    width: 80%;
    margin: auto;
}
</style>
