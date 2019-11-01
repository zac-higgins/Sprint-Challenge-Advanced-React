- [ ] Why would you use class component over function components (removing hooks from the question)?

    Without hooks, you don’t have a way of managing state. Class components would then provide your only way of managing state in your components.

- [ ] Name three lifecycle methods and their purposes.

    ⁃	mounting: component is built and rendered. Initial data is defined.
	⁃	Updating: state can be set, updating the initial data. if there is a change to a part of the virtual DOM, that part of the DOM can be re rendered with the updated data.
	⁃	un-mounting: the component is removed from the screen

- [ ] What is the purpose of a custom hook?

    custom hooks allow you to do whatever you want in your hook. In addition to just being able to have state and the ability to set state, you can have your custom hook execute whatever function you write within it.

- [ ] Why is it important to test our apps?

    Testing is important because it can reveal bugs before being used by the intended end user. Testing also allows for the entire system to be tested to make sure it works together, in addition to being able to test individual units. Testing also allows you to explore edge cases which may not be the apparent, intended use of the software as it is written.