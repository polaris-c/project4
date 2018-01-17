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

            <el-menu-item index="/functionA/form">
                <i class="el-icon-setting" aria-hidden="true"></i>
                <span>A-1</span>
            </el-menu-item>

            <el-menu-item index="/functionA/table">
                <i class="el-icon-setting"></i>
                <span>A-2</span>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/functionB/table">
            <i class="el-icon-menu"></i>
            <span slot="title">Function-B</span>
        </el-menu-item>
                            
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
