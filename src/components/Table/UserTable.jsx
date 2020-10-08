import React from 'react';
import EditDataForm from '../Form/EditDataForm';

export default class UserTable extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      jsonData: '',
      loadingData: '',
      userAdded: 'false',
      //editing: 'false',
      setEditing: 'false',
    };
  }

  /* editUser = (_id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  updateUser = (newUser) => {
    setUsers(users.map((user) => (user.id === currentUser.id ? newUser : user)));
    setCurrentUser(initialUser);
    setEditing(false);
  };
*/
  handleClick = () => {};

  // Edit function
  onDataEdit = (name) => {
    const new_data = this.state.loadingData;

    let userId = new_data.length + 1;
    new_data.push(<div key={userId}>{name + ' - ' + 0}</div>);
    new_data
      .sort(
        (a, b) =>
          a.props.children.split('-')[1].trimStart() - b.props.children.split('-')[1].trimStart(),
      )
      .reverse();

    this.setState({
      loadingData: new_data,
      setEditing: 'true',
    });
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.children.split('-')[0].trimStart()}</td>
            <td>{this.props.children.split('-')[1].trimStart()}</td>
            <td>
              <EditDataForm onEdit={this.onDataEdit} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
