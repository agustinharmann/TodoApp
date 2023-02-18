const todoReducer = ( initialState = [], action ) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [ ...initialState, action.payload ]
      //para no mutar el array inicial usamos el spreat operator del inicial state, asi COPIAMOS el estado inicial y le hacemos lo que esa accion diga... en este caso, se le agrega otro todo, si querriamos borrar solo debereiamos agregar otro case par que busque su type y ejecute su payload
    default:
      return initialState;
      //si no concuerda el type y/o el payload en ningun case, devolvera el estado inicial
  };
};

export { todoReducer }
