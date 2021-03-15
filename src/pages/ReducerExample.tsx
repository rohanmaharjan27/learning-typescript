import React, { useReducer } from "react";

interface Props {}

type Actions = { type: "add"; text: string } | { type: "remove"; idx: number };

interface Todo {
  text: String;
  complete: Boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, i) => action.idx !== i);
    default:
      return state;
  }
};

function ReducerExample(props: Props) {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: "add", text: "Rohan" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default ReducerExample;
