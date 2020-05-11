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
		item: '',
		editItem: false,
	};

	handleChange = e => console.log('handle change');
	handleSubmit = e => console.log('handle submit');
	clearList = () => console.log('clearlist method');
	handleDelete = id => console.log(`handle delet ${id}`);
	handleEdit = id => console.log(`handle edit ${id}`);

	render() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-10 mx-auto col-md-8 mt-5'>
							<h3 className='text-capitalize text-center'>List Item</h3>
							<TodoInput
								item={this.state.item}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
								editItem={this.state.editItem}
							/>

							<TodoList
								item={this.state.item}
								clearList={this.clearList}
								handleDelete={this.handleDelete}
								handleEdit={this.handleEdit}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
