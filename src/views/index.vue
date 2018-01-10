<template>
  <div id="layOut">
    <el-container>
      <el-header>- HEADER -</el-header>
      
      <el-container>
        <el-aside>
          <sideBar></sideBar>
        </el-aside>
        
        <el-main>
          <appMain></appMain>
        </el-main>
      </el-container>

      <el-footer>- FOOTER -</el-footer>
    </el-container>
  </div>
</template>

<script>
import sideBar from './sideBar'
import appMain from './appMain'

export default {
  components: {
    sideBar,
    appMain
  }
}
</script>

<style scoped>
#layOut, .el-container {
  width: 100%;
  height: 100%;
}

.el-header {
    background-color: #0593D3; /*E4EDE6,E6EFE0,66b1ff,409EFF*/
    color: #FFFFFF;
    text-align: left;
    line-height: 60px;
    width: 100%;
    font-size: 26px;
    margin: 6px 0 5px 0;
}

.el-footer {
    background-color: #0593D3; 
    color: #FFFFFF;
    text-align: center;
    padding: 10px 0;
    width: 100%;
    font-size: 12px;
    margin: 5px 0 6px 0;
}
  
.el-aside {
    background-color: #D3DCE6; /*D3DCE6*/
    color: #333;
    text-align: left;
    margin: 0 5px 0 5px;
    height: 100%; 
    /*overflow: hidden;*/
}
  
.el-main {
    background-color: #f9f9f9;
    color: #333;
    text-align: left;
    margin: 0 10px 0 0; 
    height: 100%;
    flex:1;
}
    
.el-menu {
    height: 100%;
    /*overflow: hidden;*/
}  
</style>
