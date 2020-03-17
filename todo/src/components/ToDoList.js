// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./ToDo";

function ToDoList(props) {

  console.log("These are the props being passed in: ", props);

  return (
    <div>
      <h1>To Do List</h1>
      <hr></hr>
      {props.props.map(task => (
        <ToDo
          key={task.id}
          task={task}
          toggleCompleted={props.dispatch}
        />
      ))}
    </div>
  );
}

export default ToDoList;
