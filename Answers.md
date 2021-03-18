- [X] What problem does the context API help solve?

    Context API makes state management more simple by eliminating a lot of the prop drilling through each level of the tree. Contexts create global data that can be accessed by all of the children components.


- [X] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions - things that happen, such as adding or removing an item from a to do list. These are bits of information that get passed to the store and tell it what we want to happen to the state.

  Reducer - pure function that manages state by taking in the previous state and an action and returning a new state

  Store - the single object tree that holds the state of the application



- [X] What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is global, component state is local and only accessible within that component unless passed to another level by prop drilling. For data that many components at different levels in the tree need, it would make sense to put them at the application level to avoid tedious prop drilling. For data very specific to that component, it would make more sense to make the state local. 

- [X] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux Thunk is middleware that allows devs to write action creators that return a function instead of an action. This allows the action to dispatch only when certain conditions are met. 

- [X] What is your favorite state management system you've learned and this sprint? Please explain why!

