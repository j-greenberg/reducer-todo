import React from "react";
import { useState } from "react";

function ToDoForm (props) {

  const [toDo, setToDo] = useState("");

  function handleChanges (e) {
    setToDo(e.target.value)
    console.log(toDo);
  };

  function handleSubmit (e) {
    e.preventDefault();
    props.dispatch({type: "ADD_TODO", payload: {task: toDo, id: Date.now(), completed: false}});
  };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            value={toDo}
            onChange={handleChanges}
          />
          <button>Add To Do</button>
        </form>
      </div>
    );
  }

export default ToDoForm;
