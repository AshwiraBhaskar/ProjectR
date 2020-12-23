import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.getBadgeClasses = this.getBadgeClasses.bind(this);
    this.formatCount = this.formatCount.bind(this);

    this.handleIncrement = this.handleIncrement.bind(this);

    this.state = {
      value: this.props.value,
      //tags: ["tag1", "tag2", "tag3"],
    };
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>

        {/* <ul>
          {" "}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
