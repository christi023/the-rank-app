import React from 'react';

const UserTable = (...props) => {
  const renderHeader = () => {
    let headerElement = ['Name', 'Score', 'Actions'];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  let userName = props[0].props.data.split('-')[0].trim();
  let userScore = props[0].props.data.split('-')[1].trim();
  let userClick = props[0].props.met;

  return (
    <table>
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>
        <tr>
          <td>{userName}</td>
          <td>{userScore}</td>
          <td>
            <button className="button-primary" onClick={() => userClick(userName)}>
              Show User Scores
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
