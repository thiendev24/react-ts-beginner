import { useReducer } from "react";
import CounterAction, { CounterState } from "../../types/Counter.type";

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        className="btn btn-primary me-2"
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        className="btn btn-secondary me-2"
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Increment 10
      </button>
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
