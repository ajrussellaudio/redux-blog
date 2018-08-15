import React from "react";

const TextInput = props => {
  const { name } = props;
  const id = `${name}-input`;
  const nameCapitalized = name.replace(/^\w/, c => c.toUpperCase());
  return (
    <div>
      <label htmlFor={id} children={`${nameCapitalized}: `} />
      <input type="text" id={id} {...props} />
    </div>
  );
};

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit("alan", this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput name="title" onChange={this.handleChange} />
        <TextInput name="text" onChange={this.handleChange} />
        <TextInput name="category" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

export default PostForm;
