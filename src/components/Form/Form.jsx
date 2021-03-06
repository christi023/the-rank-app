import React from 'react';
// import styles
import './Form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: '',
    };
    // binding
    this.addData = this.addData.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onDataChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addData = () => {
    this.props.onAdd(this.state.name);
    this.setState({
      name: '',
    });
  };

  validate = (e) => {
    let error = '';
    if (!this.state.name) {
    }
    if (error) {
      this.setState({ error });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate(event);
    if (isValid) {
      //  console.log(this.state);
      // clear form
      this.setState(this.state);
    }
  };

  render() {
    let { name, error } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          onChange={this.onDataChange}
          value={name}
          type="text"
          placeholder="Add Data = name - score"
        />
        <div style={{ fontSize: 12, color: 'red' }}>{error}</div>
        <button className="btn-secondary" onClick={this.addData}>
          Add Data
        </button>
        <br />
        <br />
      </form>
    );
  }
}
