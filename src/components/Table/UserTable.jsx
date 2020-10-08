import React from 'react';

const UserTable = (...props) => {
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
          <td>{props[0].props.data.props.children.split('-')[0].trimStart()}</td>
          <td>{props[0].props.data.props.children.split('-')[1].trimStart()}</td>
          <td>
            <button
              className="button-primary"
              onClick={() =>
                props[0].props.met(props[0].props.data.props.children.split('-')[0].trim())
              }
            >
              Show All User Scores
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
