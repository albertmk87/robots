import React from 'react';
import 'tachyons'
import { Button, TextField } from '@material-ui/core';
import Input from './Input.js';
const Robot=(props)=> {



		return (
				<div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
					<img src={`https://robohash.org/${props.id}`} />
					<h2>{props.name} </h2>
					<p>{props.email}</p>
					
				<Button onClick={props.delete} variant="outlined" color="secondary">
  					Delete
				</Button>

				 
				</div>
				)

}


export default Robot;


