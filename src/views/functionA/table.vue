<template>
  <div>
    <div>A-2 Datebase table</div>
    
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

    <div style="margin-top: 30px;">
    <el-table :data="tableData" style="width: 100%;" border stripe>
      <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
      </el-table-column>

    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编 辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删 除</el-button>
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
        tableData: [{
          date: '2016-05-02',
          name: '1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '4',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '5',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleAdd() {
        this.$router.push('/functionA/form'); 
      },
      handleEdit(index, row) {

        console.log(index, row);
        this.$router.push('/functionA/form'); 
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
</style>
