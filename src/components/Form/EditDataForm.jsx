import React from 'react';

export default class EditDataForm extends React.Component {
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

  editData = () => {
    this.props.onEdit(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <div>
        <input
          className="u-full-width"
          onChange={this.onDataChange}
          value={this.state.name}
          type="text"
          placeholder="name - score"
        />
        <button className="button-primary" onClick={this.editData}>
          Edit Data
        </button>

        <br />
        <br />
      </div>
    );
  }
}
