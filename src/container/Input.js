import React from 'react';
import 'tachyons'


const Input=(props)=> {



		return (
				<div className="w-40 dib v-mid mb3 ">
					<input onChange={props.change} className="pa2 f4 input-reset ba bg-transparent hover-bg-light-blue hover-black w-100" type="text" placeholder="search robots" /> 
				</div>
				)

}


export default Input;