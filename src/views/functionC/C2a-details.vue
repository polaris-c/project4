<template>
    <div id = "detailsView">
        <div class="item" v-for="(value, key) in form">
            {{ key }} :  {{ value }}
        </div>
        <el-button @click="goBack" size="medium" type="primary" plain>返 回</el-button>
    </div>
</template>

<script>
export default {
    data: function() {
		return {
			labelPosition: 'right',
			form: {
          		name: '',
	          	date1: '',
                region: '',
	          	delivery: false,
	          	comments: ''
		    }
		}
	},
	methods: {
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
        console.log('A1-details!')
        console.log('Vuex store:', this.$store.state.item)
        let vm = this
        vm.receiveData()
    }
}
</script>

<style scoped>
#detailsView {
    width: 60%;
    border-width: 2px;
    border-color: #0593D3;
    border-style: dashed;
    border-radius: 16px !important;
    margin: 30px auto auto auto;
    padding: 10px 30px 10px 30px;
}
.item {
    margin: 5px 0 5px 0;
}
button {
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>
