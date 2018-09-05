
export default {
	state:{
		id:'',
		logined:'',
		username:'',
		headshot:'',
		phone:'',
		isShowLogDialog:false,
	},
	mutations:{
		userInfo(state,user){
			state.logined = user.logined
			state.id = user.id	
			state.phone = user.phone			
			state.username = user.username
			state.headshot = user.headshot
		},
		userquit(state){
			state.logined = 0
			state.id = ''	
			state.phone=''		
			state.username = ''
			state.headshot = ''
		},
		upLogDialog(state,sta){
			state.isShowLogDialog = sta
		}
	},
	actions:{
		refresh(context){
		    let logined=context.state.logined = sessionStorage.getItem('logined')
		    if(logined){
		   	context.state.id = sessionStorage.getItem('id')	
		   	 context.state.phone = sessionStorage.getItem('phone')		
		    context.state.username = sessionStorage.getItem('username')
			context.state.headshot = sessionStorage.getItem('headshot')
		  }
		}
	}
}
