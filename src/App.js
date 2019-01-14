import React, { Component } from 'react';
import './App.css';
import SingleTodo from "./SingleTodo"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  onIputChange = e => {
    this.setState({ currentTodo: e.target.value })
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice()
    todosCopy.push(this.state.currentTodo)

    this.setState({
      todos: todosCopy,
      currentTodo: ""
    })
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice()
    todosCopy.splice(i, 1)
    this.setState({ todos: todosCopy })
  }
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return (
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)} />
      )
    })
    return (
      <div className="App">
        <input placeholder="Enter todo" value={this.state.currentTodo}
          onChange={this.onIputChange} />
        <button onClick={this.onClick}>Add!</button>
        <br />
        {this.state.todos.length === 0 ? "None yet" : <ul>{bulletedTodos}</ul>}
      </div>
    );
  }
}
