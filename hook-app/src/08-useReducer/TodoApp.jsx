import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

  //Tarea: meter toda la logica en un custom hook
  //useTodo
  //todos,
  //los handle
  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo([])


  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />       
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
}
