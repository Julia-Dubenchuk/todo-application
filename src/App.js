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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (id) {
    this.setState(prevState => {
      let getArrayNewCompleted = prevState.todos.map(item => {
        if(item.id === id) {
          item.completed = !item.completed
        } 
        return item;
      });
    return {
      todos: getArrayNewCompleted
    }
  })
  }

  render() {
    const todoArray = this.state.todos.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleChange={this.handleChange} id={todo.id} />);
    
    return ( 
      <div>
        { todoArray }
      </div>
    );
  }
}

export default App;