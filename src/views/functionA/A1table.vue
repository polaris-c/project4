<template>
  <div class="datebaseTable">
    <div>A-1 Datebase table</div>
    
    <div style="margin-top: 15px;">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="9">
        <el-input placeholder="请输入内容" v-model="searchInput" class="">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        </el-col>
    
        <el-col :span="3">
          <el-button class="handleAdd" type="primary" @click="handleAdd" :disabled="flag">新 增</el-button>
        </el-col>
      </el-row>
    </div>

    <div style="margin-top: 15px;">
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column label="日期" prop="date" width="180"></el-table-column>
          <el-table-column label="编号" prop="name"></el-table-column>
          <el-table-column label="地点" prop="address"></el-table-column>

        <el-table-column label="操作" >
          <template slot-scope="scope">
            <el-button size="mini" @click="" style="margin-left: 10px;">详细</el-button>
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
        this.$http.get('/api/data').then(
          (response) => {
            if (response.body.code == 1001) {
              console.log('response is OK:', response)
              vm.tableData = response.body.data.tableData
              console.log('responseData:', vm.tableData)
            }
            else{
              console.log('response code error!')
            }
            
          }, 
          (response) => {
            console.log('response is error:',response)
          }
      );

      },
      handleAdd() {
        this.$router.push('/functionA/A1add'); 
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push('/functionA/A1edit'); 
      },
      handleDelete(index, row) {
        console.log(index, row);
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
