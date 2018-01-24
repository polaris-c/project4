<template>
    <div id = "editView">
            <el-form ref="form" :model="form" :label-position="labelPosition" label-width="100px" size="small" >
                <!-- <el-row type="flex"> -->
                    <el-form-item label="编号">
                        <el-input v-model="form.name" clearable></el-input>
                    </el-form-item>

                    <el-form-item label="地点">
                        <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%;">
                            <el-option label="二院" value="shanghai"></el-option>
                            <el-option label="消防所" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                <!-- </el-row> -->

                <!-- <el-row type="flex"> -->
                <el-form-item label="时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col :span="2">
                        <div style="text-align: center;"> - </div>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <!-- </el-row> -->

                <!-- <el-row type="flex"> -->
                    <el-form-item label="名称">
                        <el-input v-model="form.name" clearable></el-input>
                    </el-form-item>
                <!-- </el-row> -->

                <!-- <el-row type="flex"> -->
                    <el-form-item label="更新时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col :span="2">
                            <div style="text-align: center;"> - </div>
                        </el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                <!-- </el-row> -->

                <!-- <el-row type="flex"> -->
                    <el-form-item label="备注" >
                        <el-input type="textarea" v-model="form.comments" :rows="5" ></el-input>
                    </el-form-item>
                <!-- </el-row> -->
                
                <!-- <el-row type="flex"> -->
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保 存</el-button>
                        <el-button @click="goBack">取 消</el-button>
                    </el-form-item>
                <!-- </el-row> -->
            </el-form>
            
    </div>
</template>

<script>
export default {
    data: function() {
		return {
			labelPosition: 'right',
			form: {
          		name: '',
	          	region: '',
	          	date1: '',
	          	date2: '',
	          	delivery: false,
	          	type: [],
	          	resource: '',
	          	comments: ''
		    }
		}
	},
	methods: {
		onSubmit() {
        	console.log('submit!');
      	},
        goBack() {
            let vm = this
            vm.$router.go(-1)
        },

        receiveData() {
            let vm = this
            vm.form.name = vm.$store.state.item.name
            vm.form.region = vm.$store.state.item.address
            vm.form.date1 = vm.$store.state.item.date
            vm.form.comments = vm.$store.state.item.comment
        }
	},
    mounted() {
        console.log('A1-edit!')
        console.log('Vuex store:', this.$store.state.item)
        let vm = this
        vm.receiveData()
    }
}
</script>

<style scoped>
#editView {
    width: 60%;
    margin: auto;
}

</style>
