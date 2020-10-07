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
          <td>{props.children.split('-')[0].trimStart()}</td>
          <td>{props.children.split('-')[1].trimStart()}</td>
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
