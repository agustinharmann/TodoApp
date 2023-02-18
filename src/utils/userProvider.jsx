import React from 'react';
import { createContext, useReducer } from 'react';
import { useForm } from './customHook/useForm';
import { todoReducer } from './todoReducer';

const UserContext = createContext();


const initialState = [
  {
    id: 1,
    description: 'Hacer la tarea',
    done: false,
  },
  {
    id: 2,
    description: 'Preparar el almuerzo',
    done: false,
  },
  {
    id: 3,
    description: 'Preparar el desayuno',
    done: false,
  }
];

const UserProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

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

//despacho la accion, esa accion va a caer en el reducer (se la mando con el dispatch), el reducer la va a recibir y va a ver en que caso (del case) el type concuerda (en este caso '[TODO] Add Todo'), cuando identifique a cual va a identificar el payload y lo ejecutara.


  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: 4,
      description: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <UserContext.Provider
      value={{
        todos,
        description,
        onInputChange,
        onFormSubmit,
        handleNewTodo
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export { UserProvider };
