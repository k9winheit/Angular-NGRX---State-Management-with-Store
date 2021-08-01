import {Action} from '@ngrx/store'
import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';

export class ActionParent implements Action{
    type : any;
    payload : any;
}

export class TaskAdd implements ActionParent{
    type = TodoActionTypes.Add;   
    constructor(public payload : any) { }
} 

export class TaskToggle implements ActionParent{
    type = TodoActionTypes.Toggle;    
    constructor(public payload : any) { }
}

export class TaskRemove implements ActionParent{
    type = TodoActionTypes.Remove;    
    constructor(public payload : any) { }
} 

