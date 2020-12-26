import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      //tags: ["tag1", "tag2", "tag3"],
    };

    this.getBadgeClasses = this.getBadgeClasses.bind(this);
    this.formatCount = this.formatCount.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  render() {
    console.log(this.props);
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-light" onClick={this.handleIncrement}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
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
