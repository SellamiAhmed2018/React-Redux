import React,{useRef} from "react";
import {connect} from "react-redux";
import {increment,decrement} from "../redux/actions/actions";

const Counter = ({count,increment,decrement}) => {
	const inpRef = useRef();

	return(
		<div className="wrapper">
			<button className="btn" onClick={e=>{
				increment(parseInt(inpRef.current.value));
			}}>+</button>
			<h1 className="counter">{count}</h1>
			<button className="btn" onClick={e=>{
				decrement(parseInt(inpRef.current.value));
			}}>-</button>

			<input placeholder="number" ref={inpRef} className="inp"/>
		</div>
	)

}


const mapDispatchToProps = (dispatch) => {
	return {
		increment: (x) => {dispatch(increment(x))},
		decrement: (x) => {dispatch(decrement(x))}
	}
}

const mapStateToProps = (state) => {
	return {
		count:state.count
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);