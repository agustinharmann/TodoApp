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

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify( todos ) || [])
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action)
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

  return (
    <UserContext.Provider
      value={{
        todos,
        description,
        modalAdd,
        setModalAdd,
        onInputChange,
        onFormSubmit,
        handleNewTodo,
        delteTodo,
        completeTodo
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
