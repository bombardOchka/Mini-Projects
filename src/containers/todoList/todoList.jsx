import React from 'react';
import "./todoList.scss";
import { Todo } from '../../components/todo/todo.jsx'



export class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            list: [],
        };
    }


    onSubmit = (e) => {
        e.preventDefault();


        this.setState((prevState) => ({
            list: [
                ...prevState.list,
                {
                    title: this.state.title,
                    description: this.state.description,
                }
            ],


        }));

        console.log(this.state.list)
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        return (
            <div className='container'>
                <ul>
                    {this.state.list.map((elem) => <Todo header={elem.title} description={elem.description} key={elem.title + elem.description} />)}
                </ul>

                <form action="">
                    <input name='title' placeholder='title' onChange={this.onInputChange} />
                    <input name='description' placeholder='description' onChange={this.onInputChange} />
                    <button onClick={this.onSubmit}>Add</button>
                </form>


            </div>

        )
    }
}