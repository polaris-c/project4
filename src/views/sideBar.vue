<template>
  <div id="sideBar">
    <el-menu default-active="1" class="el-menu-vertical-demo" 
        @open="handleOpen" @close="handleClose" 
        background-color="#EFEFEF" active-text-color="#0593D3">

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu" aria-hidden="true"></i>
                <span>功能一</span>
            </template>

            <!-- <router-link to = "/search" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting" aria-hidden="true"></i>
                    搜索
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/add" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>新增</span>
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/check" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>查看</span>
                </el-menu-item>
            <!-- </router-link> -->
        </el-submenu>

        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">功能二</span>
        </el-menu-item>

        <el-submenu index="3">
        	<template slot="title">
        	<i class="el-icon-menu"></i>
            <span slot="title">功能三</span>
            </template>
        </el-submenu>

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu" aria-hidden="true"></i>
                <span>功能一</span>
            </template>

            <!-- <router-link to = "/search" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting" aria-hidden="true"></i>
                    搜索
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/add" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>新增</span>
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/check" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>查看</span>
                </el-menu-item>
            <!-- </router-link> -->
        </el-submenu>

        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-menu" aria-hidden="true"></i>
                <span>功能一</span>
            </template>

            <!-- <router-link to = "/search" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting" aria-hidden="true"></i>
                    搜索
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/add" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>新增</span>
                </el-menu-item>
            <!-- </router-link> -->

            <!-- <router-link to = "/check" > -->
                <el-menu-item index="/">
                    <i class="el-icon-setting"></i>
                    <span>查看</span>
                </el-menu-item>
            <!-- </router-link> -->
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
