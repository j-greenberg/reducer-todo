import React from "react";
import { useReducer } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import "./components/Todo.css";
import { initialState, toDoReducer} from "./reducers/toDoReducer";

function App () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  const [state, dispatch] = useReducer(toDoReducer, initialState);

  return (
      <div>
        <h2>Todo Application</h2>
        <ToDoForm dispatch={dispatch}/>
        <ToDoList props={state} dispatch={dispatch} />
        <button onClick={() => dispatch({type:"CLEAR_COMPLETED"})}>Clear Completed</button>
      </div>
    );
  }

export default App;
