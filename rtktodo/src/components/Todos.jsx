import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, toggleEdit } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");

  const handleEdit = (id, text) => {
    setEditedText(text);
    dispatch(toggleEdit({ id: id, isEditing: true }));
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id: id, newText: editedText }));
    dispatch(toggleEdit({ id: id, isEditing: false }));
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {todo.isEditing ? (
              <input
                type="text"
                value={editedText}
                onChange={handleChange}
                className="bg-transparent border-b border-white text-white focus:outline-none"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div className="flex items-center">
              {todo.isEditing ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  className="text-green-500 mr-2 focus:outline-none"
                >
                  <svg
                    class="h-8 w-8 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="12" y1="8" x2="12" y2="16" />{" "}
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                
                  className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 text-green-500 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                >
                  <svg class="w-5 h-5 fill-current text-green-500" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 focus:outline-none"
              >
                <svg
                  class="h-8 w-8 text-red-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />{" "}
                  <rect x="9" y="3" width="6" height="4" rx="2" />{" "}
                  <path d="M10 12l4 4m0 -4l-4 4" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
