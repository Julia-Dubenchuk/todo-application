import React, { Component } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
  }
  render() {
    console.log('array', this.state);

    const todoArray = this.state.todos .map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />);

    return ( 
      <div>
        { todoArray }
      </div>
    );
  }
}

export default App;