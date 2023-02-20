# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





<!-- ACLARACIONES MOMENTANEAS DE LOCAL STORAGE EN EL ARCHVO USECONTEX.JS -->

<!-- CODE -->

import React, { useEffect, useState } from 'react';
import { createContext, useReducer } from 'react';
import { useForm } from './customHook/useForm';
import { todoReducer } from './todoReducer';

const UserContext = createContext();


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
  <!-- aclaracion local storage -->
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

<!-- y aclaracion de dipatch -->
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

<!-- CODE -->




<!-- ACLARACIONES DEL HOOK USEREDUCER -->


<!-- CODE -->


const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload]
    //para no mutar el array inicial usamos el spreat operator del inicial state, asi COPIAMOS el estado inicial y le hacemos lo que esa accion diga... en este caso, se le agrega otro todo, si querriamos borrar solo debereiamos agregar otro case par que busque su type y ejecute su payload
    case '[TODO] Delete Todo':
      return initialState.filter(todo => todo.id !== action.payload);
    // tareme todos los todos que sean distintos al id q recibe del payload



    case '[TODO] Complete Todo':
      return initialState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      });



    default:
      return initialState;
    //si no concuerda el type y/o el payload en ningun case, devolvera el estado inicial
  };
};

export { todoReducer }


<!-- CODE -->
