import React from 'react';
import "./todo.scss";

export class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            isDone: false,
        };
    }

    onTodoClick = () => {
        this.setState((prevState) => ({
            isDone: !prevState.isDone,
        }));
    };

    render() {
        const liClass = this.state.isDone ? "done" : "";

        return (
            <li className={liClass} onClick={this.onTodoClick}>
                <h3>{this.props.header}</h3>
                <p>{this.props.description}</p>
            </li>
        );
    }
}
