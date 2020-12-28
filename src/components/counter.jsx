import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.getBadgeClasses = this.getBadgeClasses.bind(this);
    this.formatCount = this.formatCount.bind(this);
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-light"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          Delete{" "}
        </button>

        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Counter;
