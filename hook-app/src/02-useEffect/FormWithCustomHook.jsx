import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="edgar@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      
      <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    </>
  );
};

//   const [formState, setFormState] = useState({
//     username: "",
//     email: "",
//     password: ''
//   });

//   const { username, email, password } = formState;

//   const onInputChange = ({ target }) => {
//     const { name, value } = target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };