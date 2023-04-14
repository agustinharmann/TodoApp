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







< !--DOCUMENTACION DE LOCAL STORAGE Y DE LO RELACIONADO CON "useReducer" EN EL ARCHVO "useContext.js" -- >

< !--CODE --> <>
const initialState = [];
< !--CODE --> </>

La funcion "init" es para inicializar el "reducer", esto lo hacemos porque el propio "useReducer" inicializa el "todos" como array vacio(seria como el "state" en 0).Y como el "local storage" hace su "setItem" con el estado "todo", manda ese array vacio al "local storage" cada vez que inicia el componente.
El hook "useReducer" nos brinda la POSIBILIDAD de, a demás de tener el flujo entre "state" y "setState" del hook "useState", podemos brindar un estado incial que se actualice con el "setState" pero que no se meta directamente en el flujo entre "state" y "setSate".

< !--CODE --> <>
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}
< !--CODE --> </>
< !--aclaracion local storage-- >
  Es una funcion "init" porque si su "todos"(state) fuera su "state" inicial directamente se estaria re - inicializando vacío cada vez que el componente se monte.De esta forma puede haber un flujo entre "state" y "setState" pero inicializar ese "state" por separado.
  El "||" es porque en el caso que ese localStorage aun este vacio(porque ese init(state incial) aun no guarde todos) puede venir como un array vacio.

  // ACLARACION DEL POR QUÉ: al igual que el "useState", "useRudecer" inicializa con un "state", en este caso es "initialState". Su "setState" (por lo que el "initialState" cambie) seria "todos". El problema es que "local storage" siempre está mandando "todos" (expresado en el useEffect de la línea 20) interpretaría que, cada vez que "todos" cambie volveria a ser "initialState" (el arreglo vacio). Se mete entre el ciclo de cambio de estado en el renderizado.
  Con "init" decimos que useReducer inicialice APARTE con lo que sea tenga localStorage almacenando, AISLANDO ese ciclo de state y setState que hay entre "initialState" y "todos" para que cambie libremente y al "local storage" se mande lo que valga el nuevo estado(setState) todos.


  El "useEffect" donde creamos el "local storage" se dispara cada vez que el "state" "todos" cambie y cuando el componente se monta por primera vez.Cada vez que se manda un todo nuevo, se re - inicializa al componente lo que provocaria que vuelva a ser ese "state", que inicialmente sería un array vacio.

Para que no suceda eso hacemos ese "init", para que ese "useReducer" inicie con lo que YA ESTÉ ALMACENADO en el "local storage" como "estado inicial".

< !--CODE --> <>
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])
  }, [todos]);
< !--CODE --> </>


< !--Aclaracion de dipatch-- >
  Con "dispatch" quiero decir "despacho la accion".Esa acción va a llegar al reducer(se la mandoa traves de la palabra "dispatch"), el "reducer" la va a recibir y va a ver en que caso(el "switch case") que el "type" del "dispatch" del "action" de la funcion concuerda(en este caso '[TODO] Add Todo'), cuando identifique a cual "payload" pertenece y ejecutara la accion.

< !--CODE --> <>

  const handleNewTodo = (todo) => {
  const action = {
    type: '[TODO] Add Todo',
    payload: todo
  }

  dispatch(action)
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

< !--CODE --> </>




< !--ACLARACIONES DEL HOOK "useReducer" -- >


< !--CODE --> <>

const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

< !--CODE --> </>


  para no mutar el array inicial usamos el "spreat operator" del "inicial state", asi COPIAMOS el estado inicial y le hacemos lo que esa accion diga... en éste caso del "'[TODO] Add Todo'", se copia ese "initial state" y se le agrega otro "todo", si querriamos borrar solo debereiamos utilizar la funcon de "deleteTodo" para ver el type y ejecute su payload.

    Por ejenplo:
      (en "useContext.js")
  < !--CODE --> <>
    const delteTodo = (id) => {
        dispatch({
          type: '[TODO] Delete Todo',
          payload: id,
        });
      };
  < !--CODE --> </>

< !--CODE --> <>
    case '[TODO] Delete Todo':
      return initialState.filter(todo => todo.id !== action.payload);

< !--CODE --> </>
    
    En el caso de "deleteTodo" es agarar a todos los "todos" que sean distintos al "id" q recibe del "payload" y hacer que "initial state" valga eso. (Técnicamente no borro nada sino que re asigno esto nuevo en "initial state").


< !--CODE --> <>
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
< !--CODE --> </>


    < !--CODE --> </>
    default:
      return initialState;
    < !--CODE --> <>
    
    Si no concuerda el "type" y / o el "payload" en ningun "case", devolvera el "initial state" original.
    < !--CODE --> <>
  };

< !--CODE --> </>
