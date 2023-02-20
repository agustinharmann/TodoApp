import React, { useEffect, useState } from 'react';
import { createContext, useReducer } from 'react';
import { useForm } from './customHook/useForm';
import { todoReducer } from './todoReducer';

const UserContext = createContext();


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  // en el caso que ese localStorage aun este vacio puede venir como un array vacio, lo importante es que el state INICIAL no sea initialState xq sieempre estara re-inicializandose por el todos

  //EXPLICACION MAS IMPORTANTE: al igual que el "useState", "useRudecer" inicializa con un "state", en este caso es "initialState". Su "setState" (por lo que el "initialState" cambie) seria "todos". El problema es que local storage siempre esta mandando todos (expresado en el useEffect: " localStorage.setItem('todos', JSON.stringify( todos )) ") interpretaria que, cada vez que todos cambie volveria a ser "initialState" (el arreglo vacio). Se mete entre el ciclo de cambio de estado en el renderizado.
  //Con "init" decimos que useReducer inicialice APARTE OFICALEMENTE con lo que sea tenga localStorage almacenando, AISLANDO ese ciclo de state y setState que hay entre "initialState" y "todos" para que cambie libremente y al localStorage se mande lo que valga el nuevo estado (setState) todos.
}
// es la funcion init para inicializar el reducer, esto lo hacemos porque el propio useReducer inicializa el "todos" como array vacio, seria como el "state" en 0. Y como el localStorage hace su "setItem" con el estado "todo", manda ese array vacio al localStorage cada vez que inicia el componente.

// el "useEffect" donde creamos el localStorage se dispara cada vez que el satate "todos" cambie y cuando el componente se monta por primera vez, cada vez que se manda un todo nuevo, se re-inicializa al componente lo que provocaria que vuelva a ser un array vacio
// cuando se monta el componente por primera vez, nuestros todos son un arreglo vacio e inmediatamente despues se manda ese efecto donde almacena ese array vacio
// CADA vez que queramos agregar un nuevo todo reiniciaremos este ciclo, lo que solo almacenaria arrays vacios

// para que no suceda eso hacemos ese init para que ese useReducer inicue con lo que YA ESTE ALMACENADO en el localStorage como "estado inicial".

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

  //despacho la accion, esa accion va a caer en el reducer (se la mando con el dispatch), el reducer la va a recibir y va a ver en que caso (del case) el type concuerda (en este caso '[TODO] Add Todo'), cuando identifique a cual va a identificar el payload y lo ejecutara.


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
