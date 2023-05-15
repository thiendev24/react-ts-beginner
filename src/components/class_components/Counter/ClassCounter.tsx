import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class ClassCounter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Increment
        </button>
        <h3>
          {this.props.message} {this.state.count}
        </h3>
      </div>
    );
  }
}

export default ClassCounter;
