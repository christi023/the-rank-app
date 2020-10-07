import React from 'react';

const UserTable = (props) => {
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
          <td></td>
          <td></td>
          <td>{}</td>
          <td></td>
          <td>
            <button onClick={() => props.deleteUser()}>Delete</button>
            <button onClick={() => props.editUser()}>Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default UserTable;
