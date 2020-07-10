import React from 'react';
import Robot from "./Robot.js";
import axios from 'axios';
import Input from './Input.js';
import Scroll from './Scroll.js';

class RobotsList extends React.Component {

	state={
		users:[],
		inputField:""
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			this.setState({users:response.data})
		})
	}


		change=(e)=>{
		this.setState({inputField:e.target.value})
	}


	delete=(id)=>{
		const newUsers=this.state.users;
		const findEl=newUsers.findIndex(user=> user.id===id);
		newUsers.splice(findEl,1);
		this.setState({users:newUsers});
	}

	render(){
		let result='';
		if(this.state.users){
			const newUsers=this.state.users.filter(user=>{
				return user.name.toLowerCase().includes(this.state.inputField);
			})
					
			result=newUsers.map(user=>{
				return <Robot key={user.id} id={user.id} name={user.name} email={user.email} delete={()=>this.delete(user.id)} />
			})
		}

		return (
			<div>
			<Input change={this.change}/>
				<Scroll>
				<div className='w-80 center'>
				
						{result}
				</div>
					</Scroll>
				</div>
				)
	}
}


export default RobotsList;