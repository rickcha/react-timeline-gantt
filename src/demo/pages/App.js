import React, { Component } from "react";
import TimeLine from "libs/TimeLine";
import Generator from "./Generator";
import "./App.css";

let config = {
  header: {
    // borderLeft cannot be changed
    top: {
      style: {
        backgroundColor: "white",
        color: "#3c3c3cbf",
        fontSize: 12,
        borderLeft: "1px solid #b7b7bb",
        paddingVertical: 0,
        borderBottom: "0.5px solid #b7b7bb"
      }
    },
    middle: {
      style: {
        backgroundColor: "#fff",
        color: "#3c3c3cbf",
        borderBottom: "none",
        fontSize: 12
      },
      selectedStyle: { backgroundColor: "#b13525" }
    },
    bottom: {
      style: {
        background: "#fff",
        color: "#3c3c3c80",
        borderBottom: "0.5px solid #b7b7bb"
      },
      selectedStyle: { backgroundColor: "#fff", fontWeight: "bold" }
    }
  },
  taskList: {
    title: {
      label: "Tasks",
      style: {
        backgroundColor: "#fff",
        borderBottom: "0.5px solid #b7b7bb",
        color: "#3c3c3cbf",
        textAlign: "center"
      }
    },
    task: {
      style: {
        color: "#3C3C3C",
        backgroundColor: "#fff",
        borderBottom: "0.5px solid transparent"
      }
    },
    verticalSeparator: {
      style: { backgroundColor: "#fff" },
      grip: {
        style: { backgroundColor: "#cfcfcd" }
      }
    }
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "#fff",
        borderBottom: "solid 0.5px #fff"
      }
    },
    task: {
      showLabel: false,
      style: {
        position: "absolute",
        borderRadius: 5,
        color: "grey",
        textAlign: "center",
        backgroundColor: "lightgrey",
        border: `1px solid grey`
      },
      selectedStyle: {
        borderRadius: 5,
        color: "blue",
        backgroundColor: "blue",
        border: "3px solid blue"
      }
    }
  },
  links: {
    color: "black",
    selectedColor: "blue"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    let result = Generator.generateData();
    this.data = [
      {
        id: "c7f4f984-1b61-416c-903c-288eb6bc7406",
        name: "Username should be case-insensitive during login",
        start: 1579559820480,
        end: 1580239655140,
        collection: "tasks"
      },
      {
        id: "f6d40111-7c32-4a63-a30b-1381f276aabb",
        name: "User should be able to save empty text in email",
        start: 1580372977616,
        end: 1581838074724,
        collection: "tasks"
      },
      {
        id: "8fb6c893-6140-4fc4-996c-621491989fac",
        name: "Backward compatibility with the previous db schema",
        start: 1579980493909,
        end: 1580326093909,
        collection: "tasks"
      },
      {
        id: "aaba172e-ef08-4e5f-af40-6f3a1880c71c",
        name: "[Bug] Chat messages are not loading fast enough/incorrect order",
        start: 1580941717893,
        end: 1581517717893,
        collection: "tasks"
      },
      {
        id: "2f4ed0b8-5093-4d24-9d4f-c9e62bf047d5",
        name: "[Design] Redesign marketing website ",
        start: 1579030148986,
        end: 1579721348986,
        collection: "tasks"
      },
      {
        id: "53cbafed-c69c-4739-8599-c3a2e9fbecb0",
        name: "Research Libraries",
        start: 1582543774191,
        end: 1583000974191,
        collection: "tasks"
      },
      {
        id: "8acd82d4-e036-4e16-95bd-9410b0bf153c",
        name: "Setup Visual Studio",
        start: 1580289591874,
        end: 1580872791874,
        collection: "tasks"
      }
    ];
    this.state = {
      itemheight: 30,
      data: [],
      selectedItem: null,
      timelineMode: "month",
      links: [
        {
          _id: "5e28ae9168d7960007ef7e19",
          start: "f6d40111-7c32-4a63-a30b-1381f276aabb",
          end: "53cbafed-c69c-4739-8599-c3a2e9fbecb0",
          active: true,
          id: "998b79ff-0d68-4b30-9a77-b9cf11a4eb39",
          courseId: "e1772f2c-141c-4b79-938a-62fdb2664515",
          groupId: "80472564-a837-4847-bbe0-9e8cbe2f1dc5",
          collection: "links",
          createdBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
          createdOn: 1579724433431,
          modifiedBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
          modifiedOn: 1579724433431
        }
      ],
      nonEditableName: false
    };
  }

  handleDayWidth = e => {
    this.setState({ daysWidth: parseInt(e.target.value) });
  };

  handleItemHeight = e => {
    this.setState({ itemheight: parseInt(e.target.value) });
  };

  onHorizonChange = (start, end) => {
    let result = this.data.filter(item => {
      return (
        (item.start < start && item.end > end) ||
        (item.start > start && item.start < end) ||
        (item.end > start && item.end < end)
      );
    });
    console.log("Calculating ");
    this.setState({ data: result });
  };

  onSelectItem = item => {
    console.log(`Select Item ${item}`);
    this.setState({ selectedItem: item });
  };

  onUpdateTask = (item, props) => {
    item.start = props.start;
    item.end = props.end;
    this.setState({ data: [...this.state.data] });
    console.log(`Update Item ${item}`);
  };

  onCreateLink = item => {
    let newLink = Generator.createLink(item.start, item.end);
    this.setState({ links: [...this.state.links, newLink] });
    console.log(`Update Item ${item}`);
  };

  getbuttonStyle(value) {
    return this.state.timelineMode == value
      ? { backgroundColor: "grey", boder: "solid 1px #223344" }
      : {};
  }

  modeChange = value => {
    this.setState({ timelineMode: value });
  };

  genID() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
  }

  getRandomDate() {
    let result = new Date();
    result.setDate(result.getDate() + Math.random() * 10);
    return result;
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addTask = () => {
    let newTask = {
      id: this.state.data.length + 1,
      start: new Date(),
      end: this.getRandomDate(),
      name: "New Task",
      color: this.getRandomColor()
    };
    this.setState({ data: [newTask, ...this.state.data] });
  };

  delete = () => {
    console.log("On delete");
    if (this.state.selectedItem) {
      let index = this.state.links.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.links.splice(index, 1);
        this.setState({ links: [...this.state.links] });
      }
      index = this.state.data.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.data.splice(index, 1);
        this.setState({ data: [...this.state.data] });
      }
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="nav-container">
          <div className="mode-container-title">Full Demo</div>
          <div className="operation-button-container">
            <div className="operation-button-container">
              <div className="mode-button" onClick={this.addTask}>
                <svg height={30} width={30} viewBox="0 0 48 48">
                  <path
                    fill="silver"
                    d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"
                  />
                </svg>
              </div>
              <div className="mode-button" onClick={this.delete}>
                <svg height={30} width={30} viewBox="0 0 48 48">
                  <path
                    fill="silver"
                    d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mode-container">
            <div
              className="mode-container-item mode-container-item-left"
              onClick={e => this.modeChange("day")}
              style={this.getbuttonStyle("day")}
            >
              Day
            </div>
            <div
              className="mode-container-item"
              onClick={e => this.modeChange("week")}
              style={this.getbuttonStyle("week")}
            >
              Week
            </div>
            <div
              className="mode-container-item"
              onClick={e => this.modeChange("month")}
              style={this.getbuttonStyle("month")}
            >
              Month
            </div>
            <div
              className="mode-container-item mode-container-item-right"
              onClick={e => this.modeChange("year")}
              style={this.getbuttonStyle("year")}
            >
              Year
            </div>
            <div
              className="mode-container-item mode-container-item-editable-toggle"
              style={{ marginLeft: "20px" }}
              onClick={() => {
                this.setState({
                  nonEditableName: !this.state.nonEditableName
                });
              }}
            >
              {this.state.nonEditableName ? "Enable" : "Disable"} name edition
            </div>
          </div>
        </div>
        <div className="time-line-container">
          <TimeLine
            dayWidth={50}
            config={config}
            data={this.state.data.splice(0, 10)}
            links={this.state.links}
            onHorizonChange={this.onHorizonChange}
            onSelectItem={this.onSelectItem}
            onUpdateTask={this.onUpdateTask}
            onCreateLink={this.onCreateLink}
            mode={this.state.timelineMode}
            itemheight={this.state.itemheight}
            selectedItem={this.state.selectedItem}
            nonEditableName={this.state.nonEditableName}
          />
        </div>
      </div>
    );
  }
}

export default App;
