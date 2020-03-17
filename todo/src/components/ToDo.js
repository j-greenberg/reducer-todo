import React from "react";

function Todo(props) {
  return (
    <div
      onClick={() => props.toggleCompleted({type: "TOGGLE_COMPLETED", clickedId: props.task.id})}
      className={`task${props.task.completed ? " completed" : ""}`}>
      <h3>
        Task {props.task.id}: {props.task.task}
      </h3>
      <input type="checkbox" checked={props.task.completed}/>
    </div>
  );
}

export default Todo;
