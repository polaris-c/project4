<template>
  <div>
    <el-container>
      <el-header></el-header>
      
      <el-container>
        <el-aside></el-aside>
        <el-main></el-main>
      </el-container>

      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.el-header {
    background-color: #0593D3; /*E4EDE6,E6EFE0,66b1ff,409EFF*/
    color: #FFFFFF;
    text-align: left;
    line-height: 60px;
    font-size: 26px;
    margin: 6px 0 5px 0;
}

.el-footer {
    background-color: #0593D3; 
    color: #FFFFFF;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    margin: 5px 0 6px 0;
}
  
.el-aside {
    background-color: #D3DCE6; /*D3DCE6*/
    color: #333;
    text-align: left;
    /*line-height: 200px;*/
    margin: 0 5px 0 5px; 
    overflow: hidden;
}
  
.el-main {
    background-color: #f9f9f9;
    color: #333;
    text-align: left;
    margin: 0 10px 0 0; 
    flex:1;
}
  
/*body > .el-container {
    margin-bottom: 40px;
}*/
  
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

#aside {
    height: 100%;
}

#footer {
}
    
.el-menu {
    height: 100%;
    /*overflow: hidden;*/
}  
</style>
