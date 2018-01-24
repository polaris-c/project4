<template>
  <div id="sideBar">
    <el-menu router default-active="1" class="el-menu-vertical-demo" 
        @open="handleOpen" @close="handleClose" 
        background-color="#EFEFEF" active-text-color="#0593D3">
        <!-- :router="true" -->

        <el-submenu index="1">
            <template slot="title">                                                                            
                <i class="el-icon-menu" aria-hidden="true"></i>
                <span>Function-A</span>
            </template>

            <el-menu-item index="/functionA/A1table">
                <i class="el-icon-setting" aria-hidden="true"></i>
                <span>A-1</span>
            </el-menu-item>

            <el-menu-item index="/functionA/A2table">
                <i class="el-icon-setting"></i>
                <span>A-2</span>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/functionB/table">
            <i class="el-icon-menu"></i>
            <span slot="title">Function-B</span>
        </el-menu-item>

        <el-submenu index="3">
            <template slot="title">                                                    
                <i class="el-icon-menu" aria-hidden="true"></i>
                <span>Function-C</span>
            </template>

            <el-menu-item index="/functionA/A1table">
                <i class="el-icon-setting" aria-hidden="true"></i>
                <span>C-1</span>
            </el-menu-item>

            <el-submenu index="3-2">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>C-2</span>
                </template>  

                <el-menu-item index="3-2-1">
                    <i class="el-icon-d-arrow-right"></i>
                    <span>C-2-a</span> 
                </el-menu-item>

                <el-menu-item index="3-2-2">
                    <i class="el-icon-d-arrow-right"></i>
                    <span>C-2-b</span>
                </el-menu-item>                    
            </el-submenu>

        </el-submenu>
                            
    </el-menu>
  </div>
</template>

<script>

export default {
	methods: {
        handleOpen(key, keyPath) {
        	console.log(key, keyPath);
        },
      	handleClose(key, keyPath) {
        	console.log(key, keyPath);
      	}
    }
}

</script>

<style scoped>
#sideBar {
	height: 90%;
}
</style>
