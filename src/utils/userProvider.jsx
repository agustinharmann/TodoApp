import React, { useEffect, useState } from 'react';
import { createContext, useReducer } from 'react';
import { useForm } from './customHook/useForm';
import { todoReducer } from './todoReducer';

const UserContext = createContext();

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const UserProvider = ({ children }) => {

  const [modalAdd, setModalAdd] = useState(false);

  const [search, setSearch] = useState('');




  let [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch(action);
  };

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    setModalAdd(false)
    handleNewTodo(newTodo);
    onResetForm();
  };

  const delteTodo = (id) => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: '[TODO] Complete Todo',
      payload: id
    });
  };

  const onInputTodoChange = ({ target }) => {
    const valueTodo = target.value;
    setSearch(valueTodo)
  };


  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.done).length;
  const incompleteTodos = todos.filter(todo => !todo.done).length;



  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.description.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  const [theme, setTheme] = useState(() => {
    const savedMode = JSON.parse(localStorage.getItem('theme'));
    return savedMode !== null ? savedMode : false; // Valor por defecto
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const body = document.getElementsByTagName("body")[0];
  if (theme) {
    body.classList.add('body__theme')
  } else {
    body.classList.remove('body__theme')
  }


  return (
    <UserContext.Provider
      value={{
        searchedTodos,
        description,
        onInputTodoChange,
        search,
        modalAdd,
        setModalAdd,
        onInputChange,
        onFormSubmit,
        handleNewTodo,
        delteTodo,
        completeTodo,
        totalTodos,
        completedTodos,
        incompleteTodos,
        theme,
        setTheme
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
