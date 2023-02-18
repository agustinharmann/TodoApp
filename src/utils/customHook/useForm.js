import { useState } from "react";

const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm)


  // const { username, email, password } = formState esta desestructuracion no hace falta porque solo se desestructuran estos elementos, si habrian mas no serian llamados.


  const onInputChange = ({ target }) => {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
      // ---LA QUE ESTA SIENDO MODIFICADAAA--- CAMBIE Y SU VALOR SERA LA DEL NUEVO VALUE
    })
    console.log(name, value);
  }

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
}

export { useForm };
