import React from 'react';
import { MTRow, MTColumn } from 'mt-ui';
import ExcelDropzone from './excel-dropzone.jsx';
import users from './users';
import scores from './scores';
//import utils from './components/utils/utils';
// styles

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      jsonData: '',
      loadingData: '',
    };
    // bind
    this.handleSheetData = this.handleSheetData.bind(this);
    this.handleSheetStartupData = this.handleSheetStartupData.bind(this);
  }

  // component did mount
  componentDidMount() {
    this.handleSheetStartupData();
  }

  handleSheetData(data) {
    // replace this log with actual handling of the data
    //console.log(data);

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
  }

  render() {
    let items;
    // check if jsonData is null if not return items with map function
    if (this.state.jsonData) {
      items = this.state.jsonData.map((data, key) => {
        return <div key={key}>{data.name + ' - ' + data.score}</div>;
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
          <MTColumn className="startup-results" width={20}>
            <div>
              <h2>Startup results</h2>
              {this.state.loadingData}
            </div>
          </MTColumn>

          <MTColumn className="dropped-file-results" width={20}>
            <div>
              <h2>Dropped file results</h2>
              {items}
            </div>
          </MTColumn>
        </MTRow>
      </div>
    );
  }
}
