import React, { Component } from 'react';
import './App.css';

import Container from 'components/Container';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';


class App extends Component {
  state = {
    // todos: [],
    // filter: '',
    // showModal: false,
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);

    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    // const nextTodos = this.state.todos;
    // const prevTodos = prevState.todos;

    // if (nextTodos !== prevTodos) {
    //   console.log('Обновилось поле todos, записываю todos в хранилище');
    //   localStorage.setItem('todos', JSON.stringify(nextTodos));
    // }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  addTodo = text => {
    // const todo = {
    //   id: shortid.generate(),
    //   text,
    //   completed: false,
    // };

    // this.setState(({ todos }) => ({
    //   todos: [todo, ...todos],
    // }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    // this.setState(({ todos }) => ({
    //   todos: todos.filter(({ id }) => id !== todoId),
    // }));
  };

  toggleCompleted = todoId => {
    // this.setState(({ todos }) => ({
    //   todos: todos.map(todo =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    //   ),
    // }));
  };

  changeFilter = e => {
    // this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    // const { filter, todos } = this.state;
    // const normalizedFilter = filter.toLowerCase();

    // return todos.filter(({ text }) =>
    //   text.toLowerCase().includes(normalizedFilter),
    // );
  };

  calculateCompletedTodos = () => {
    // const { todos } = this.state;

    // return todos.reduce(
    //   (total, todo) => (todo.completed ? total + 1 : total),
    //   0,
    // );
  };

  toggleModal = () => {
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };

  render() {
    // const { todos, filter, showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
       <Searchbar/>
       <ImageGallery/>
       <Button/>
      </Container>
    );
  }
}

export default App;
