import { Task } from "../models/Task";
import { ActionParent } from "../actions/task.actions";
import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';

let initialState: Task[] = [
   { id: 1, name: "Task 1", place: "place 1", isCompleted: false },
   { id: 2, name: "Task 2", place: "place 2", isCompleted: false },
   { id: 3, name: "Task 3", place: "place 3", isCompleted: false }
];

// Take current state and action as parameters
export function TodoReducer(state = initialState, action: ActionParent) {
   switch (action.type) {
      case TodoActionTypes.Add:
         return [...state, action.payload]
      case TodoActionTypes.Toggle:
         return [...state.map(t => {
            if (t.id == action.payload) {
               return {
                  ...t,
                  isCompleted: !t.isCompleted
               }
            } else {
               return t;
            }
         })]
      case TodoActionTypes.Remove:
         let stareArray = [...state]
         stareArray.splice(action.payload, 1)
         return [...stareArray];
      default:
         return state;
   }
}
