
export default {
	state:{
		   userinfo:{
		   	entertype:'',
            nickname:'',
            sex:'',
            city:'',
            phone:'',
            school:'',
            age:'',
            major:'',
            email:'',
            desc:'',
		   }
	},
	mutations:{
		userBaseInfo(state,user){
			state.userinfo = user
		},
		userquit(state){
			state = ''

		},

	},
	actions:{

	}
}
