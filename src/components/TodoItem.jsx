import React from "react";

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    return { textDecoration: todo.completed ? "line-through" : "none" };
  };

  return (
    <div className="flex justify-center items-center mb-2">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <p className="" style={getTodoTitleStyle()}>
              {todo.title}
            </p>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-circle btn-outline btn-sm hover:bg-red-600"
            >
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
