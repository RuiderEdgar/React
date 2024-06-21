/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Puebas sobre <TodoItem/>', () => {
  const todo = {
    id: 1,
    description: 'Tomar piedra del alma',
    done: false
  }

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el Todo pendiente de completar', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between "
    );
    expect(screen.getByText(todo.description)).toBeTruthy()

    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  })

  test('debe mostrar el Todo completado', () => {
    todo.done = true
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/>)
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between "
    );
    expect(screen.getByText(todo.description)).toBeTruthy()
  
    const spanElement = screen.getByLabelText('span')
    expect(spanElement.className).toContain(
      "align-self-center text-decoration-line-throug"
    );
  })

  test('Debe de llamar el ToggleTodo cuando se hace click', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)
    
    const toggleTodo = screen.getByLabelText('span');
    fireEvent.click(toggleTodo)

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('El boton debe de llamar el onDeleteTodo cuando se hace click', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />)
    
    const buttonBorrar = screen.getByText('Borrar');
    fireEvent.click(buttonBorrar)

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})