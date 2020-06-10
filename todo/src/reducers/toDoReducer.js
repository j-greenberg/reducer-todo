export const initialState = [{
    id: "1", 
    task: "cut hair", 
    completed: false
  },
  {
    id: "2",
    task: "wash car",
    completed: false
  }]; 

export const toDoReducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'ADD_TODO':
        return [...state,
            action.payload]
        case 'TOGGLE_COMPLETED':
            return(state.map(task => {
                if (task.id === action.clickedId) {
                  console.log("toggled", "Clicked Id: ", action.clickedId, "Task Id", task.id);
                  return {
                    ...task,
                    completed: !task.completed
                  }
                } else { return task; }
            }
        ))
        case 'CLEAR_COMPLETED':
            return(
                state.filter(list => {
                    return (list.completed === false);
                  })    
            )       
        default: 
            return state;
    }
}