import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
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
    const styles = {
      container: {
        padding: 10,
      },
      input: {
        flex: 1,
        paddingRight: 20,
        width: '65%',
        height: 27,
      },
      button: {
        float: 'right',
        marginRight: 80,
        width: 120,
        padding: 10,
        color: 'red',
      },
    };
    return (
      <div>
        <label>Name</label>
        <input
          className="u-full-width"
          onChange={this.onDataChange}
          value={this.state.name}
          type="text"
          placeholder="name - score"
        />
        <button className="button-primary" onClick={this.addData}>
          Add Data
        </button>

        <br />
        <br />
      </div>
    );
  }
}
