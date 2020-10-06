import React from 'react';

export default class AddPlayer extends React.Component {
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
      <div style={styles.container}>
        <input
          style={styles.input}
          onChange={this.onDataChange}
          value={this.state.name}
          type="text"
          placeholder="type here .."
        />
        <button style={styles.button} onClick={this.addData}>
          Add Data
        </button>
      </div>
    );
  }
}
