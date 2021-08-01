# State Management with Angular NGRX with store

# @ngrx/store
NgRx Store is a  Redux-inspired state management system  that enables you to use observables to manage state in an Angular application

# How is it built-in
It is combnation Redux pattern and Rxjs


# Main Key Functions

1. store: The store is what holds the app's state. 
2. Action: A unique event dispatched from components and services that describe how the state should be changed. For    
   example, ‘Add Customer’ can be an action that will change the state (i.e. add a new customer to the list).
3. Reducer: All the state changes happen inside the reducer; it responds to the action and, based on that action, it will
   create a new immutable state and return it to the store.
4. Selector: Selector is a function used for obtaining a part of the state from the store and render the data view

# NGRX Architecture

![image](https://user-images.githubusercontent.com/11206974/127764128-cde89b89-769d-4d67-ab21-36fd2525f856.png)
