<template>
  <div id="topBar">
    <el-menu router unique-opened default-active="activeIndex" class="" mode="horizontal" @select="handleSelect" 
        background-color="#0593D3" text-color="#fff" active-text-color="#fff">
        <el-col :span="20">
            <el-menu-item index="/about">- Header System Name -</el-menu-item>
        </el-col>
        <el-col :span="4"> 
            <el-menu-item id="user" index="/User/user">User</el-menu-item>
        </el-col>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '/User/user',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>

#topBar {
}

.el-menu-item {
	font-size: 24px;
}

#middle {
	width: 60%;
}

#user {
	/*margin-left: 70%;*/
}


</style>
