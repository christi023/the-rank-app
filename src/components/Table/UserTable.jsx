import React, { useState } from 'react';
//import EditDataForm from '../Form/EditDataForm';
const UserTable = (props) => {
  const initialUser = { _id: null, name: '', score: '' };
  const [users, setUsers] = useState(initialUser);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);

  const handleClick = (e) => {
    alert('edit_row');
  };

  const editUser = (_id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(users.map((user) => (user.id === currentUser.id ? newUser : user)));
    setCurrentUser(initialUser);
    setEditing(false);
  };

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
          <td>{props.children.split('-')[0].trimStart()}</td>
          <td>{props.children.split('-')[1].trimStart()}</td>
          <td>
            <button onClick={() => props.deleteUser()}>Delete</button>
            <button
              id="edit_button2"
              value="Edit"
              className="edit"
              onClick={() => handleClick(editUser())}
            >
              Edit
            </button>
            <button id="save_button2" value="Save" className="save" onClick={() => handleClick()}>
              Save
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UserTable;
