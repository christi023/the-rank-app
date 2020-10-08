import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    // binding
    this.addData = this.addData.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
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

  render() {
    return (
      <div className="form">
        <input
          className="form-input"
          onChange={this.onDataChange}
          value={this.state.name}
          type="text"
          placeholder="Add Data = name - score"
        />
        <button className="btn-secondary" onClick={this.addData}>
          Add Data
        </button>

        <br />
        <br />
      </div>
    );
  }
}
