import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    console.log(count);
    return (
      <div className="div-container">
        <button onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
