const intialState = {
	count:0
};

const countReducer = (state=intialState,action) => {
	switch(action.type){
		case "INCREMENT": return{...state,count:state.count+action.numb};
		case "DECREMENT": return{...state,count:state.count-action.numb};
		default:return state;
	}
}

export default countReducer;