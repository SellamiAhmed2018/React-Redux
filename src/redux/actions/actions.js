export const increment = (x) => (dispatch,getState) =>{
	if(isNaN(x))
		x = 1;
	dispatch({type:"INCREMENT",numb:x});
}


export const decrement = (x) => (dispatch,getState) =>{
	if(isNaN(x))
		x = 1;
	dispatch({type:"DECREMENT",numb:x});
}
