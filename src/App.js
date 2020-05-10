import React, {Component} from 'react';
import uuid from 'react-uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

export default class App extends Component {
	state = {
		items: [
			{id: 1, title: 'wake up'},
			{id: 2, title: 'break fast'},
		],
		id: uuid(),
	};

	render() {
		console.log(this.state);
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<TodoInput></TodoInput>
						<TodoList></TodoList>
					</div>
				</div>
			</div>
		);
	}
}
