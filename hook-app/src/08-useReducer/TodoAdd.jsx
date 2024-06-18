import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false
    }

    onNewTodo(newTodo);
    onResetForm()
  }


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button className={"btn btn-outline-primary mt-1"}>Agregar</button>
    </form>
  );
}
