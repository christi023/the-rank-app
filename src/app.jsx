import React from 'react';
import { MTRow, MTColumn } from 'mt-ui';
import ExcelDropzone from './excel-dropzone.jsx';
import users from './users';
import scores from './scores';

import Form from './components/Form/Form';
import Table from './components/Table/UserTable';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      jsonData: '',
      loadingData: '',
      userAllScoreData: '',
      userAdded: 'false',
      setEditing: 'false',
      showDialog: 'false',
    };
    // bind
    this.handleSheetData = this.handleSheetData.bind(this);
    this.handleSheetStartupData = this.handleSheetStartupData.bind(this);
    // this.onDataAdd = this.onDataAdd.bind(this);
    this.loadUserScores = this.loadUserScores.bind(this);
  }

  // component did mount
  componentDidMount() {
    this.handleSheetStartupData();
  }

  handleSheetData(data) {
    // Sort data ascending or descending
    data.sort((a, b) => a.score - b.score).reverse();
    // Set data to jsonData state variable
    this.setState({
      jsonData: data,
    });
  }

  // handleSheetStartupData
  handleSheetStartupData() {
    let iniItems;
    let scoreItems = { scores };

    iniItems = users.map((user, key) => {
      let scoreData;
      let maxResultUser;

      scoreData = scoreItems.scores.filter((scoreId) => scoreId.userId === user._id);
      maxResultUser = scoreData.sort((a, b) => a.score - b.score).reverse()[0];
      return <div key={key}>{user.name + ' - ' + maxResultUser.score}</div>;
    });

    // Set highest scores
    this.setState({
      loadingData: iniItems
        .sort(
          (a, b) =>
            a.props.children.split('-')[1].trimStart() - b.props.children.split('-')[1].trimStart(),
        )
        .reverse(),
    });
  } // adding  new data

  // adding  new data
  /*  onDataAdd = (name) => {
    const new_data = this.state.jsonData;

    let userId = new_data && new_data.length + 1;
    new_data.push(<div key={userId}>{name + ' - ' + 0}</div>);
    new_data
      .sort(
        (a, b) =>
          a.props.children.split('-')[1].trimStart() - b.props.children.split('-')[1].trimStart(),
      )
      .reverse();

    this.setState({
      jsonData: new_data,
      userAdded: 'true',
    });
  };*/

  // adding data to table
  onDataAdd = (value) => {
    const new_data = this.state.jsonData;

    // let userId = new_data.length + 1;
    new_data.push({
      name: value.split('-')[0].trim(),
      score: value.split('-')[1].trim(),
    });
    new_data.sort((a, b) => a.score - b.score).reverse();

    this.setState({
      jsonData: new_data,
      userAdded: 'true',
    });
  };

  // load users scores in order
  loadUserScores = (userName) => {
    const new_UserScores = { scores };
    const new_Users = { users };
    let userScoreData;
    let user;

    user = new_Users.users.filter((user) => user.name === userName);

    userScoreData = new_UserScores.scores.filter((scoreId) => scoreId.userId === user[0]._id);

    userScoreData.sort((a, b) => a.score - b.score).reverse();
    userScoreData.push(userName);
    this.setState({
      userAllScoreData: userScoreData,
      showDialog: 'true',
    });
  };

  render() {
    let items;
    let loadingItems;
    let userScoreItems;
    let userAllScoreName;
    let userAllScoreData;
    // check if jsonData is null if not return items with map function
    if (this.state.jsonData) {
      items = this.state.jsonData.map((data, key) => {
        return <div key={key}>{data.name + ' - ' + data.score}</div>;
      });
    }

    if (this.state.loadingData) {
      loadingItems = this.state.loadingData.map((data, key) => {
        return <Table key={key} props={{ data: data, met: this.loadUserScores }}></Table>;
      });
    }
    if (this.state.userAllScoreData) {
      userAllScoreData = this.state.userAllScoreData;
      userAllScoreName = userAllScoreData.pop();
      userScoreItems = userAllScoreData.map((data, key) => {
        return <div key={key}>{data.score}</div>;
      });
    }

    return (
      <div className="container container--centered">
        <h1 className="m-t">Mediatool exercise</h1>
        <MTRow>
          <MTColumn width={20}>
            <ExcelDropzone onSheetDrop={this.handleSheetData} label="Drop your file here" />
          </MTColumn>
          <MTColumn width={75} offset={5}>
            <div>
              <h2>Initial site</h2>
              <p>
                Drop the excel file scores.xlsx that you will find in this repo in the area to the
                left and watch the log output in the console. We hope this is enough to get you
                started with the import.
              </p>
            </div>
            <div>
              <h2>Explaining the grid</h2>
              <p>
                In the Mediatool grid you can use MTRow and MTColumn to structure your graphical
                components. This is basically what you need to know:
              </p>
              <ul>
                <li>
                  The index.jsx file uses these components so you can see an example of how they
                  work
                </li>
                <li>MTRow will always create a line break</li>
                <li>
                  MTColumns will stretch to the width of the entire row, unless you use the
                  properties width and offset
                </li>
                <li>Width and offset is set in percent</li>
              </ul>
            </div>
          </MTColumn>
        </MTRow>
        <br />
        <MTRow>
          <MTColumn className="startup-results" width={70}>
            <div>
              <h2>Startup results</h2>
              {loadingItems}
            </div>
          </MTColumn>

          <MTColumn className="startup-results" width={30}>
            <div>
              <h2>{userAllScoreName} All scores</h2>
              {userScoreItems}
            </div>
          </MTColumn>

          <MTColumn className="dropped-file-results" width={20}>
            <div className=" form-list">
              <h2 style={{ paddingLeft: '2.2rem' }}>Add Data Here</h2>
              <Form onAdd={this.onDataAdd} />
              <br />
              <div className="form-items">{items}</div>
            </div>
          </MTColumn>
        </MTRow>
      </div>
    );
  }
}
