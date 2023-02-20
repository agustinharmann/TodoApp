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
